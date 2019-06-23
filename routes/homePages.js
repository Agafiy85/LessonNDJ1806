const path = require('path');

const express = require("express");

const router = express.Router();
router.get('/', (req, res, next) =>{
     res.sendFile(path.join(__dirname, "../", "DataB", "homeDB.txt"));

    res.render('home',{
    title: "home page",
    mainheader: "This is a main header" 
});
})
module.exports = router;