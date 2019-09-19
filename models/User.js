const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  swipedleft: [{
    type: Schema.Types.ObjectId,
    ref: "SwipedLeft"
  }],
  swipedright: [{
    type: Schema.Types.ObjectId,
    ref: "SwipedRight"
  }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;