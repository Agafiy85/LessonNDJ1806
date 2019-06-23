const path = require('path');
const fs = require("fs");

const express = require(`express`);

// const fs = require(`fs`);
const router = express.Router();

router.get('/contact', (req, res, next) =>{
    //let contactDB =(path.readFileSync('db/contactDB.txt'));

    let contents = fs.readFileSync(path.join(__dirname,  "aboutDB.txt"));
    
    console.log(contents);

    // res.render('contact',{
    //     title: contactDB,
    //     h1: contactDB.capture,
    //     p: contactDB.text 
    // });
    
});

module.exports = router;