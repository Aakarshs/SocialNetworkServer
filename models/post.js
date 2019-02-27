var mongoose = require("mongoose");
 
var postSchema = new mongoose.Schema({
   name: String,
   text: String,
   image: String,
   date: String,
   likes: Number,
   dislikes: Number,
});
 
module.exports = mongoose.model("Post", postSchema);