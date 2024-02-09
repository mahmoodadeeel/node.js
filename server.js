const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
   console.log('request made'); 
   console.log(req.url, req.method);
    //set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = "./views/";

    switch (req.url){
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;

        case '/about':
            path += "about.html";
            res.statusCode = 200;
            break;

        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location','/about' );
            break;

        default:
            path += "404.html";
            res.statusCode = 404;
            break;
    }
    console.log(req.url);
    // send html file
    fs.readFile(path,(err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else{
            //res.write(data);
            res.end(data);
        }
   });
   //res.write('<head><link rel="stylesheet" href="#"></head>')
   //res.write('<p>This is a basic responce.</p><p>Second responce.</p>');
   //res.end();
});

server.listen(3000, 'localhost', () => {
    console.log(" listning for requests on port 3000");
});
