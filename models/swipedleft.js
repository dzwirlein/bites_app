const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SwipedLeftSchema = new Schema({
  body: String
});

const SwipedLeft = mongoose.model("SwipedLeft", SwipedLeftSchema);

module.exports = SwipedLeft;