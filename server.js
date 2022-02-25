const http = require('http');
const fs = require("fs");
const path = require("path");

const express = require("express");

let app = express();

app.use(express.static('public'));

app.get('/', function(req,res){

    res.sendFile(path.join(__dirname + '/public/index.html'));

});

app.get('/gallery', function (req, res) {

    res.sendFile(path.join(__dirname + '/public/gallery.html'));

});

app.get('/style.css', function (req, res) {

    res.sendFile(path.join(__dirname + '/public/style.css'));

});


//getting stuff

app.get('', function(req, res){

    let dirPath = path.join(__dirname + '/public/images/gallery/')

    fs.readdir(dirPath, function (err, files) {

        if (err) {
            return console.log("Problem scanning gallery directory: " + err);
        }

        let fileNames = [];
        files.forEach(function (file) {
            fileNames.push(file);
        });

        res.send(files);

    });
    res.sendFile(path.join(__dirname + '/public/images/back2.jpg'));

});


let server = app.listen(8000)

// http.createServer(function(req, res) {

//     if(req.url === "/"){
//         fs.readFile("index.html", function(err, data){
            
//             if(err){
//                 res.writeHead(404);
//                 res.write("Not Found!");
//             } else {
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.write(data);
//             }
//             res.end();
    
//         });
//     } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + req.url);
//         res.end();
//     }


// }).listen(8000)