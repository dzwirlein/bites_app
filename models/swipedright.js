const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SwipedRightSchema = new Schema({
  body: String
});

const SwipedRight = mongoose.model("SwipedRight", SwipedRightSchema);

module.exports = SwipedRight;