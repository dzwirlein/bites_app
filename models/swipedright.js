const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SwipedRightSchema = new Schema({
  name: String,
  location: {},
  lovedcomment: [{
    type: Schema.Types.ObjectId,
    ref: "LovedComment"
  }]
});

const SwipedRight = mongoose.model("SwipedRight", SwipedRightSchema);

module.exports = SwipedRight;