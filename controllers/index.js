const { v4: uuidv4 } = require("uuid");
const axios = require("axios")

const db = require("../models");
// const fakeDb = require("../routes/api/businesses/Example.json")

function getBusinesses(cb) {
  db.Business.find({})
  .sort({ date: -1 })
  .then((dbModel) => cb(dbModel))
  .catch(() => cb({}));
}
function getUsers(cb) {
  db.User.find({})
  .sort({ date: -1 })
  .then((dbModel) => cb(dbModel))
  .catch(() => cb({}));
}
function match(groupId, businessId) {
  // console.log(businessId)
  db.Group.findOneAndUpdate(
    {"uuid": groupId},
    {$push: {matches: businessId} }
  )
  .then(result => {
    // console.log(result)
  })
  .catch((err) => console.log(err));
}

module.exports = {
  yes: (req, res) => {
    let alreadyDone = false;
    db.Group.findOne({
      "users": req.body.id,
    })
    .then(result => {
      getUsers(users => {
        alreadyDone = result.matches.includes( req.body.businessId);
        if (!alreadyDone) {
          result.users.forEach((user, i) => {
            result.users[i] = (users.find( ({ id }) => id === user ))
          })
          result.users.forEach(user => {
            // console.log(user.yes)
            // console.log(req.body.businessId)
            if (user.yes.includes( req.body.businessId )) {
                match(result.uuid, req.body.businessId)
            }
          })
        }
      })
      
      db.User.findOneAndUpdate(
        {"id": req.body.id,},
        {$push: { yes: req.body.businessId }}
      )
      .then(result => {
        res.send(result)
      })
      .catch((err) => res.status(422).json(err));
    })
    .catch(err => err);

    
  },
  no: (req, res) => {
    db.User.findOneAndUpdate(
      {"id": req.body.id,},
      {$push: { no: req.body.businessId }}
    )
    .then(result => {
      res.send(result)
    })
    .catch((err) => res.status(422).json(err));
  },
  undo: (req, res) => {
    res.send(req.body)
  },
  createSession: (req, res) => {
    const sessionId = uuidv4();
    const userId = uuidv4();
    db.User.create({
      name: req.body.name.trim(),
      id: userId,
    })
    .catch((err) => res.status(422).json(err));
    const businesses = [];
    const businessId = []
    
    const locationSearched = parseInt(req.body.zip);
    //offset
    axios.get(`https://api.yelp.com/v3/businesses/search`, {
      headers: {
        Authorization: `Bearer ${process.env.YELP}`
      },
      params: {
        location: locationSearched,
        term: "restaurants",
        // offset: offset,
        limit: 50
      }
    })
    .then((yelp) => {
      yelp.data.businesses.forEach(business => {
        const insertObj = {};
        businessId.push(business.id)
        insertObj.id = business.id
        insertObj.name = business.name
        insertObj.url = business.url
        insertObj.image_url = business.image_url
        insertObj.rating = business.rating
        insertObj.price = business.price
        insertObj.location = business.location.display_address.join(", ")
        insertObj.phone = business.phone
        insertObj.display_phone = business.display_phone
        insertObj.display_address = business.display_phone
        insertObj.distance = business.distance
        insertObj.transactions = business.transactions
        insertObj.categories = business.categories.map(e => e.title)
        businesses.push(insertObj)
      })
      
      db.Business.insertMany(businesses)
      .catch((err) => console.log(err));
      db.Group.create({
        users: [userId],
        uuid: sessionId,
        zipcode: parseInt(req.body.zip),
        businesses: businessId
      })
      .then(() => res.json(userId))
      .catch((err) => console.log(err));
    })
    .catch((err) => {
    console.log (err)
    })
  },
  joinSession: (req, res) => {
    db.Group.findOne({
      uuid: req.body.id,
    })
    .then((result) => {
      getUsers(users => {
        result.users.forEach((user, i) => {
          result.users[i] = (users.find( ({ id }) => id === user ))
        })
        res.json(result)
      })
    })
    .catch((err) => res.status(422).json(err));
  },
  joinGroupSession: (req,res) => {
    const userId = uuidv4();
    db.User.create({
      name: req.body.name.trim(),
      id: userId,
    })
    .then(() => {
      db.Group.findOneAndUpdate({
        uuid: req.body.id,
      },
      {$push: { users: userId }}
      )
      .then(result => {
        res.json(userId)
      })
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      });
    })
    .catch(err => {
      console.log(err)
      res.status(422).json(err)
    });
  },

  bookmark: (req, res) => {
    db.User.findOneAndUpdate({
      "id": req.body.id,
    },
    {$push: { bookmarks: req.body.businessId }}
    )
    .then(result => {
      if (result==null) {
        res.json({})
        return;
      }
      res.json(result)
    })
    .catch(err => error);
  },
  removeBookmark: (req, res) => {
    db.User.updateOne({
      "id": req.query.id,
    },
    {$pull: { bookmarks: req.query.businessId }}
    )
    .then(result => {
      if (result==null) {
        res.json({})
        return;
      }
      res.json(result)
    })
    .catch(err => error);
  },
  getuser: (req, res) => {
    db.User.findOne({
      "id": req.query.id,
    })
    .then(result => {
      if (result==null) {
        res.json({})
        return;
      }
      getBusinesses(businesses => {
        result.bookmarks.forEach((bookmark, i) => {
          result.bookmarks[i] = (businesses.find( ({ id }) => id === bookmark ))
        })
        res.json(result)
      })
    })
    .catch(err => error);
  },
  getGroup: (req, res) => {
    db.Group.findOne({
      "users": req.query.id,
    })
    .then(result => {
      if (result==null) {
        res.json({})
        return;
      }
      getBusinesses(businesses => {
        result.businesses.forEach((business, i) => {
          result.businesses[i] = (businesses.find( ({ id }) => id === business ))
        })
        result.matches.forEach((business, i) => {
          result.matches[i] = (businesses.find( ({ id }) => id === business ))
        })
        res.json(result)
      })
    })
    .catch(err => error);
  }
};
