const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LovedCommentSchema = new Schema({
  body: String
});

const LovedComment = mongoose.model("LovedComment", LovedCommentSchema);

module.exports = LovedComment;