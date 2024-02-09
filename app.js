const express = require('express');
require("dotenv").config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
// express app
const app = express();

// connect to mongodb
const dbURI = process.env.DB_URI;
mongoose.connect(dbURI)
.then(() =>app.listen(3000))
.catch((err) => console.log(err));


// register view engine
app.set('view engine', 'ejs');
// listen for request
//app.listen(3000);

// middleware
/*app.use((req, res, next) => {
    console.log("New request made");
    console.log("Host", req.hostname);
    console.log("Path", req.path);
    console.log("Method", req.method);
    next();
});

app.use((req, res, next) => {
    console.log("In the next middleware");
    next();
});
*/

app.use(express.static('public'));
app.use(express.urlencoded( { extended: true} ));
app.use(morgan('dev'));

// mongoose and mongo sandbox routes

/*app.get("/add-blog",(req, res) => {
    const blog = new Blog({
        title : "My secong blog",
        snippet: "Snippet of second blog",
        body : "Body of second blog"
    });

    blog.save()
    .then((result) =>{
        res.send(result);
    })
    .catch((err) =>{
        console.log(err);
    })
});

//get all blogs
app.get('/all-blog',(req, res) => {
    Blog.find()
    .then((result) =>{
        res.send(result);
    })
    .catch((err) =>{
        console.log(err);
    });
});

//get single blog

app.get('/single-blog', (req, res) =>{
    Blog.findById("65bf6126f3cfe625a7df42a5")
    .then((result) =>{
        res.send(result);
    })
    .catch((err) =>{
        console.log(err);
    })
});
*/

// routes

app.get("/",(req, res) =>{

    res.redirect('/blogs');
    //res.send('<p>home page.</p>');
    //res.sendFile('./views/index.html', { root: __dirname });
    /*const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', { title : 'Home', blogs });
    */
});

app.get("/about",(req, res) =>{
    //res.send('<p>About page.</p>');
    //res.sendFile('./views/about.html', { root: __dirname });
    res.render('about',{ title : 'about' });
});


  
//redirects
/*app.get("/about-us", (req, res)=> {
    res.redirect("/about");
});
*/
//blog routes
app.use('/blogs',blogRoutes);

//404 page
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname});
    res.status(404).render('404');
})

