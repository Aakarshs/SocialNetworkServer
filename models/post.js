var mongoose = require("mongoose");
 
var postSchema = new mongoose.Schema({
   text: String,
   image: String,
   description: String,
});
 
module.exports = mongoose.model("Post", postSchema);