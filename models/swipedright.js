const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SwipedRightSchema = new Schema({
  body: String,
  lovedcomment: [{
    type: Schema.Types.ObjectId,
    ref: "LovedComment"
  }]
});

const SwipedRight = mongoose.model("SwipedRight", SwipedRightSchema);

module.exports = SwipedRight;