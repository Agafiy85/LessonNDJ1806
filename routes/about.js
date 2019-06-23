const path = require('path');
const fs = require(`fs`);
const express = require('express');

const router = express.Router();

router.get('/about', (req, res, next) => {

//res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
let aboutDB = JSON.parse(fs.readFileSync('./DataB/abouttDB.txt', 'utf8'));
res.render('contact', {
    title: aboutDB.title,
    mainheader: aboutDB.capture

});

});

module.exports = router;