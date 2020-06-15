const { v4: uuidv4 } = require("uuid");

const db = require("../models");

function getGroupByUserId(id, cb, error) {
  db.Group.findOne({
    "users.id": id,
  })
  .then(result => {
    if (result==null) {
      cb({})
      return;
    }
    cb(result)
  })
  .catch(err => error);
}
function getUserFromGroup(group, cb) {
  group.users.forEach((user) => {
    if (user.id === id) {
      cb(user);
    }
  })
  cb({})
}

module.exports = {
  findAll: function (req, res) {
    db.Business.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Business.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  createSession: (req, res) => {
    const sessionId = uuidv4();
    const userId = uuidv4();
    db.User.create({
      name: req.body.name.trim(),
      id: userId,
    })
    .catch((err) => res.status(422).json(err));
    db.Group.create({
      users: [userId],
      uuid: sessionId,
      zipcode: parseInt(req.body.zip),
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
      res.json(result)
    })
    .catch(err => error);
  },
  getGroup: (req, res) => {
    getGroupByUserId(req.query.id, 
      group => res.json(group),
      err => res.status(422).json(err)
    )
  }
};
