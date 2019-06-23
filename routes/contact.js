const express = require(`express`);
const fs = require(`fs`);
const router = express.Router();

router.get('/contact', (req, res, next) =>{
    let contactDB = JSON.parse(fs.readFileSync('./db/contactDB.txt', 'utf8'));

    res.render('contact',{
        title: contactDB.title,
        h1: contactDB.capture,
        p: contactDB.text 
    });
    
});

module.exports = router;