var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Post  = require("./models/post")

    
mongoose.connect("mongodb+srv://CS345:de3s2VTZ5dpXY_K@cluster0-sxmnr.mongodb.net/test?retryWrites=true");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - show all posts
app.get("/posts", function(req, res){
    // Get all posts from DB
    Post.find({}, function(err, allPosts){
       if(err){
           console.log(err);
       } else {
          res.render("posts/index",{posts:allPosts});
       }
    });
});

//CREATE - add new post to DB
app.post("/posts", function(req, res){
    // get data from form and add to Post DB
    var text = req.body.text;
    var image = req.body.image;
    var newPost = {text: text, image: image}
    // Create a new post and save to DB
    Post.create(newPost, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to posts page
            res.redirect("/posts");
        }
    });
});

//NEW - show form to create new post
app.get("/posts/new", function(req, res){
   res.render("posts/new"); 
});



app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Project 1 has started!");
});