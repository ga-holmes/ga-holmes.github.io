const fs = require("fs");
const path = require("path");

// This page would normally be run if the site was not currently hosted on github pages (as a static page)

export default async function handler(req, res){

    let dirPath = path.resolve('./public/images/gallery/')

    fs.readdir(dirPath, function (err, files) {

        if (err) {
            return console.log("Problem scanning gallery directory: " + err);
        }

        let fileNames = [];
        files.forEach(function (file) {

            let fileExt = file.split('.').pop().toLowerCase();
            if (fileExt === "jpg" || fileExt === "png") {
                fileNames.push(file);
            }
        });

        res.status(200).json(JSON.stringify(fileNames));

    });

}