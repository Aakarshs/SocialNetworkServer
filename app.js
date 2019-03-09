//initialling modules.

var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Post  = require("./models/post")

//Connting to the database.
mongoose.connect("mongodb+srv://aakarshs:back2thefuture!@cluster0-pcxap.mongodb.net/test?retryWrites=true");


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

//Modules for parsing the data sent from the backend.
app.use(require("body-parser").json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

 
//GET - Show all posts.
app.get("/posts", function(req, res){
    // Get all posts from DB
    Post.find({}, function(err, allPosts){
       if(err){
            //If there is an error log it to the console.
           console.log(err);
       } else {
          res.json({ success: true, posts:allPosts });
          //res.render("posts/index",{posts:allPosts});
       }
    });
});

//POST - Add new post to DB.
app.post("/posts", function(req, res){
    // get data from form and add to Post DB
    var name = req.body.name;
    var text = req.body.text;
    var image = req.body.image;
    var date = req.body.date;
   
    //Create an object: newPost.
    var newPost = {  
        name: name,
        text: text,
        image: image,
        date: date,
        likes: 0,
        dislikes: 0,
    }

    // Create a new post and save to DB.
    Post.create(newPost, function(err, newlyCreated){
        if(err){
            //If there is an error log it to the console.
            console.log(err);
        } else {
             return res.json({ success: true });
        }
    });
});


//PUT - Used for updating likes and dislikes. (Updates the database based on the data it gets from teh frontend.) 
app.put("/posts/:id/update", function(req, res, next) {   

    //find the object by id and update it.
    Post.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err){
             //If there is an error log it to the console.
            console.log(err);
        } 
        res.send(req.body);
    });
});

//Bind and listen for connections.
app.listen(process.env.PORT, process.env.IP, function(){
});
