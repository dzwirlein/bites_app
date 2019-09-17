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

  app.get("/api/users", (req, res) => {
    db.User.find({})
    .then(dbUser => res.json(dbUser))
    .catch(function(err) {
      res.json(err);
    });
  });
  
  app.post("/api/users/:id", function(req, res) {
    console.log(req.body)
    db.User.create(req.body)
    .then(function(dbUser) {
      res.json(dbUser);
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