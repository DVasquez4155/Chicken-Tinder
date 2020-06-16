const { v4: uuidv4 } = require("uuid");

const db = require("../models");
const fakeDb = require("../routes/api/businesses/Example.json")

function getBusinesses(cb) {
  db.Business.find({})
  .sort({ date: -1 })
  .then((dbModel) => cb(dbModel))
  .catch(() => cb({}));
}

module.exports = {
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
    fakeDb.businesses.forEach(business => {
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
  },
  joinSession: (req, res) => {
    db.Group.findOne({
      uuid: req.body.id,
    })
    .then((result) => res.json(result))
    .catch((err) => res.status(422).json(err));
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
        res.json(result)
      })
      // res.json(result)
    })
    .catch(err => error);
  }
};
