const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  swipedleft: [{
    type: Schema.Types.ObjectId,
    ref: "SwipedLeft"
  }],
  swipedright: [{
    type: Schema.Types.ObjectId,
    ref: "SwipedRight"
  }],
  hatedcomment: [{
    type: Schema.Types.ObjectId,
    ref: "HatedComment"
  }],
  lovedcomment: [{
    type: Schema.Types.ObjectId,
    ref: "LovedComment"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;