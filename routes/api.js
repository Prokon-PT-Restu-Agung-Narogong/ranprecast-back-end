// library
var express = require('express');
var router = express.Router();

// configs
const configs = require('../config/configs');
const {multerSingle,multerMulti} = require('../config/configStorageMulter');

const multer = require("multer");
const path = require("path");


/* GET dataHeader listing. */
let data = require('./data.js')
let dataDefault = require('./data-default.js')


router.get('/', (req, res, next)=> {
  res.send(data);
});

router.get('/:req_title', (req, res, next)=> {
  res.send(data[req.params.req_title]);
});

router.get('/produk/:id', (req,res,next)=>{
  const filterDataProduct = data.produk.filter((e)=>{
    return e.id == req.params.id
  })
  if(filterDataProduct.length != 0){
    res.send(filterDataProduct)
  }else{
    res.send({
      error : "505",
      message : `We No Have Product By ID ${req.params.id}`
    });
  }
})


router.post('/hero',multerSingle({req_name : "image", location_path : "./public/images/hero/"}) ,(req, res, next)=> {

    if(req.file){
      data.hero.img.find((e)=>{
        if(e.id == 1){
          e.src =  `${configs.base_url}/images/hero/${req.file.filename}`
        }
      })
    }
    data.hero.nama = req.body.nama;
    data.hero.deskripsi = req.body.deskripsi;
});


router.post('/visitors' ,(req, res, next)=> {
    if(req.body.ip_address != null){
      data.visitors.push({
        ip_address  : req.body.ip_address,
        browser : req.body.browser || "Not Found",
        city : req.body.city || "Not Found",
        country : req.body.country || "Not Found",
        isp : req.body.isp || "Not Found",
        regionName : req.body.regionName || "Not Found",
      })    
      res.send({
        error : "201",
        message : `Success Created Visitors`
      });  
    }
});

router.all('/visimisi', (req, res, next)=> {
  console.log(req.body.visimisi);
  if(req.body.visi != "" && req.body.misi){
    data.deskripsi = req.body.deskripsi;
  }else if(res.send(req.body.default) == "Default"){
    data.deskripsi = dataDefault.deskripsi;
  }
  res.redirect('/')
});



module.exports = router;


