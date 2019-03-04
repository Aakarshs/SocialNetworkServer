//Initializing module.
var mongoose = require("mongoose");
 
//Creating a mogoose database scheme.
var postSchema = new mongoose.Schema({
   name: String,
   text: String,
   image: String,
   date: String,
   likes: Number,
   dislikes: Number,
});
 
//Exporting the module.
module.exports = mongoose.model("Post", postSchema);