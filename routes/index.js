const db = require("../models");

module.exports = function(app) {

  app.get("/api/users", (req, res) => {
    db.User.find({})
    .then(dbUser => res.json(dbUser))
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
  
  app.delete("/api/users/:id", function(req, res) {
    db.User.deleteOne({ _id: req.params.id })
    .then(function(dbUser) {
      res.json(dbUser);
    });
  });

}