var express = require("express");
const { log } = require("node:console");
var router = express.Router();
const fs = require("node:fs");
const { send } = require("node:process");

/* GET home page. */
router.get("/", function (req, res, next) {
  arr = [];

  fs.readdir("./uploads", { withFileTypes: true }, (error, files) => {
    files.forEach((dir) => {
      arr.push({ name: dir.name, isFolder: dir.isDirectory() });
    });

    res.render("index", { files: arr });
  });
});

// CreateFile
router.get("/createdFile",function(req,res){
  fs.writeFile(`./uploads/${req.query.fileName}`,"",function(err){
    if(err){
      console.log(err);
    }
    else{
      res.redirect("/");
    }
  })
})

//CreateFolder
router.get("/createFolder",function(req,res){
    fs.mkdir(`./uploads/${req.query.folderName}`,{},function(err){
      if(err){
        console.log(err);
      }
      else{
        res.redirect("/");
      }
    })
  })


//Openfile
router.get("/file/:fileName",function(req,res){
  arr = [];

  fs.readdir("./uploads", { withFileTypes: true }, (error, files) => {
    files.forEach((dir) => {
      arr.push({ name: dir.name, isFolder: dir.isDirectory() });
    });
    fs.readFile(`./uploads/${req.params.fileName}`,"utf8" ,function(err,data){
      res.render("fileOpened", { files: arr,fileOpen: req.params.fileName, data });
    })
  });
})

//Save
router.post("/save/:fileName",(req,res)=>{
  fs.writeFile(`./uploads/${req.params.fileName}`,req.body.textarea,function(err){
    if(err){
      console.log(err);
    }
    else{
      res.redirect(`/file/${req.params.fileName}`);
    }
  })
})

//Delete file
router.get("/deleted/:fileName",(req,res)=>{
  fs.unlink(`./uploads/${req.params.fileName}`,(err)=>{
    if(err) console.log(err);
    else
    res.redirect("/")
  })
})
//Delete folder
router.get("/delete/:folderName",(req,res)=>{
  fs.rmdir(`./uploads/${req.params.folderName}`,(err)=>{
    if(err) console.log(err);
    else
    res.redirect("/")
  })
})



module.exports = router;
