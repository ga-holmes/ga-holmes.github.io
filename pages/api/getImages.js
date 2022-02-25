const fs = require("fs");
const path = require("path");

export default async function handler(req, res){

    let dirPath = path.resolve('./public/images/gallery/')

    fs.readdir(dirPath, function (err, files) {

        if (err) {
            return console.log("Problem scanning gallery directory: " + err);
        }
        
        res.status(200).json(JSON.stringify(files));

    });

}