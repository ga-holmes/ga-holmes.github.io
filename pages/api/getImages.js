const fs = require("fs");
const path = require("path");

export default async function handler(req, res){

    let dirPath = path.resolve('../site/public/images/gallery/')

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