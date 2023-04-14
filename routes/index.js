var express = require('express');
var router = express.Router();
const fs = require('node:fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir("./uploads",{withFileTypes:true},(error,files)=>{
    // console.log(files)
    res.render('index',{files:files});
  })
});

module.exports = router;
