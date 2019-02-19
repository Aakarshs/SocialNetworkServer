var mongoose = require("mongoose");
 
var postSchema = new mongoose.Schema({
   name: String,
   description: String
});
 
module.exports = mongoose.model("Post", postSchema);