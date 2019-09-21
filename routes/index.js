const axios = require("axios");
const db = require("../models");

module.exports = function(app) {

  app.get("/api/search/:id", (req, res) => {
    const link = "https://maps.googleapis.com/maps/api/place/textsearch/json?query="+req.query[0]+"&key="+process.env.REACT_APP_API_PLACES
    axios.get(link)
    .then(function(response) {
      res.json(response.data.results)
    })
    .catch(function(err) {
      res.json(err);
    });
  });
  
  app.post("/api/users/:id", function(req, res) {
    db.User.create(req.body)
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  app.post("/api/swipedleft/:id", function(req, res) {
    const id = req.params.id
    db.SwipedLeft.create({
      name: req.body.name,
      location: req.body.location
    })
    .then(function(dbSwipedLeft) {
      return db.User.findOneAndUpdate({ _id: id }, { $push: { swipedleft: dbSwipedLeft._id }}, { new: true });
    })
    .then(function(reqv, resp) {
      db.User.findOne({
        _id: id
      })
      .populate({
        path: 'swipedleft',
        populate: { path: 'hatedcomment' }
      })
      .populate({
        path: 'swipedright',
        populate: { path: 'lovedcomment' }
      })
      .then(dbUser => res.json(dbUser))
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  app.post("/api/swipedright/:id", function(req, res) {
    const id = req.params.id
    db.SwipedRight.create({
      name: req.body.name,
      location: req.body.location
    })
    .then(function(dbSwipedRight) {
      return db.User.findOneAndUpdate({ _id: id }, { $push: { swipedright: dbSwipedRight._id }}, { new: true });
    })
    .then(function(reqv, rep) {
      db.User.findOne({
        _id: id
      })
      .populate({
        path: 'swipedleft',
        populate: { path: 'hatedcomment' }
      })
      .populate({
        path: 'swipedright',
        populate: { path: 'lovedcomment' }
      })
      .then(function(dbUser) {
        res.json(dbUser);
      })
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  app.post("/api/lovedcomment/:id", function(req, res) {
    const id = req.params.id
    db.LovedComment.create(req.body)
    .then(function (dbLovedComment) {
      return db.SwipedRight.findOneAndUpdate({ _id: id }, { $push: { lovedcomment: dbLovedComment._id }}, { new: true });
    })
    .then(function(reqv, rep) {
      db.SwipedRight.findOne({
        _id: id
      })
      .populate("lovedcomment")
      .then(function(dbSwipedRight) {
        res.json(dbSwipedRight);
      })
    })
    .catch(function(err) {
      res.json(err);
    });
  });

  app.post("/api/hatedcomment/:id", function(req, res) {
    const id = req.params.id
    db.HatedComment.create(req.body)
    .then(function (dbHatedComment) {
      return db.SwipedLeft.findOneAndUpdate({ _id: id }, { $push: { hatedcomment: dbHatedComment._id }}, { new: true });
    })
    .then(function(reqv, rep) {
      db.SwipedLeft.findOne({
        _id: id
      })
      .populate("hatedcomment")
      .then(function(dbSwipedLeft) {
        console.log(dbSwipedLeft)
        res.json(dbSwipedLeft);
      })
    })
    .catch(function(err) {
      res.json(err);
    });
  });
  
  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      username: req.query.username,
      password: req.query.password
    })
    .populate({
      path: 'swipedleft',
      populate: { path: 'hatedcomment' }
    })
    .populate({
      path: 'swipedright',
      populate: { path: 'lovedcomment' }
    })
    .then(dbUser => res.json(dbUser))
    .catch(function(err) {
      res.json(err);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.User.deleteOne({ _id: req.params.id })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

}