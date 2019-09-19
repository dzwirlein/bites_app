const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SwipedLeftSchema = new Schema({
  body: String,
  hatedcomment: [{
    type: Schema.Types.ObjectId,
    ref: "HatedComment"
  }],
});

const SwipedLeft = mongoose.model("SwipedLeft", SwipedLeftSchema);

module.exports = SwipedLeft;