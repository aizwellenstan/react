const path = require('path');
const express = require('express');
const multer  = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'assets/uploads')
    },
    filename: function (req, file, cb) {
        // You could rename the file name
        // cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

        // You could use the original name
        cb(null, file.originalname)
    }
});

var upload = multer({storage: storage})

const router = express.Router();


// const testFolder = '../assets/uploads';
const directoryPath = path.join(__dirname, "../assets/uploads")
const fs = require('fs');

router.get("/photo", (req, res, next) => {
    var fileList = []
    async function readfile() {
        fs.readdir(directoryPath, function(err, files) {
            if (err) {
                console.log("Error getting directory information.")
            } else {
                files.forEach(function(file) {
                    console.log(file)
                    fileList.push(file)
                })
            }
        })
    }
    readfile()
    res.json(fileList)
})

// Upload Image
router.post("/photo", upload.single('photo'), (req, res, next) => {
    return res.json({
        image: req.file.path
    })  
})




module.exports = router;