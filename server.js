const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bitesuserDB");

// Add routes, both API and view
require("./routes")(app);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

module.exports = app;