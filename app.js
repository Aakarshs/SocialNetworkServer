var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Post  = require("./models/post")

    
mongoose.connect("mongodb+srv://CS345:de3s2VTZ5dpXY_K@cluster0-sxmnr.mongodb.net/test?retryWrites=true");

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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
          res.json({ success: true, posts:allPosts });
          //res.render("posts/index",{posts:allPosts});
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
             return res.json({ success: true });
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