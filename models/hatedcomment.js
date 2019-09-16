const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HatedCommentSchema = new Schema({
  body: String
});

const HatedComment = mongoose.model("HatedComment", HatedCommentSchema);

module.exports = HatedComment;