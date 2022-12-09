// library
var express = require('express');
var router = express.Router();

// configs
const configs = require('../config/configs');
const {multerSingle,multerMulti} = require('../config/configStorageMulter');

const multer = require("multer");
const path = require("path");


// tools
const formattedToday = require('../tools/formattedToday');

/* GET dataHeader listing. */
let data = require('./data.js')
let dataDefault = require('./data-default.js')


router.get('/', (req, res, next)=> {
  res.send(data);
});

router.get('/:req_title', (req, res, next)=> {
  res.send(data[req.params.req_title]);
});

router.post('/produk/add',multerSingle({req_name : "image", location_path : "./public/images/products/"}), (req,res,next)=>{
  try{
    var uniq = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
      data.produk.push({
        id : uniq,
        name : req.body.name || "",
        desc : req.body.deskripsi || "",
        specs : req.body.specs.split(',') || [""],
        jenis : req.body.jenis.split(',') || [""],
        stok : req.body.stok || "",
        img : (req.file) ? `${configs.base_url}/images/products/${req.file.filename}` : ""
      })  
      res.send({
        error : "200",
        message : `Success Tambah Portofolio`
      });
  }catch(e){
    res.send({
      error : "404",
      message : `Failed Tambah Portofolio`
    });
  }
})


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

router.post('/produk',multerSingle({req_name : "image", location_path : "./public/images/products/"}) ,(req, res, next)=> {
  try{
    data.produk.find((e)=>{
        if(e.id == req.body.id){
          e.name = req.body.name,
          e.desc = req.body.deskripsi,
          e.specs = req.body.specs.split(',') || [""],
          e.jenis = req.body.jenis.split(',') || [""],
          e.stok = req.body.stok,
          e.img = (req.file) ? `${configs.base_url}/images/products/${req.file.filename}` : e.img
          res.send({
            error : "200",
            message : `Success Update Product`
          });
        }
    });
  }catch(e){
    res.send({
      error : "404",
      message : `Failed Update Product`
    });
  }
});

router.post('/produk/delete', (req,res,next)=>{
  try{
    const objWithIdIndex = data.produk.findIndex((obj) => obj.id == req.body.id);

    if (objWithIdIndex > -1) {
      data.produk.splice(objWithIdIndex, 1);
      res.send({
        error : "200",
        message : `Success Delete Product`
      });   
    }
  }catch(e){
    res.send({
      error : "404",
      message : `Failed Delete Product`
    });
  }
})

router.get('/portofolio/:id', (req,res,next)=>{
  const filterData = data.portofolio.filter((e)=>{
    return e.id == req.params.id
  })
  if(filterData.length != 0){
    res.send(filterData)
  }else{
    res.send({
      error : "505",
      message : `We No Have Product By ID ${req.params.id}`
    });
  }
})

router.post('/portofolio/delete', (req,res,next)=>{
  try{
    const objWithIdIndex = data.portofolio.findIndex((obj) => obj.id == req.body.id);

    if (objWithIdIndex > -1) {
      data.portofolio.splice(objWithIdIndex, 1);
      res.send({
        error : "200",
        message : `Success Delete Portofolio`
      });   
    }
  }catch(e){
    res.send({
      error : "404",
      message : `Failed Delete Portofolio`
    });
  }
})

router.post('/portofolio/add',multerSingle({req_name : "image", location_path : "./public/images/portofolio/"}), (req,res,next)=>{
  try{
    var uniq = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
    if(req.body != null && req.file){
      data.portofolio.push({
        id : uniq,
        img : `${configs.base_url}/images/portofolio/${req.file.filename}` || "",
        deskripsi : req.body.deskripsi || ""
      })  
      res.send({
        error : "200",
        message : `Success Delete Portofolio`
      });
    }else{
      throw error;
    }
  }catch(e){
    res.send({
      error : "404",
      message : `Failed Delete Portofolio`
    });
  }
})


router.post('/portofolio',multerSingle({req_name : "image", location_path : "./public/images/portofolio/"}) ,(req, res, next)=> {
  try{
      data.portofolio.find((e)=>{
        if(e.id == req.body.id){
          if(req.file){
            e.img = `${configs.base_url}/images/portofolio/${req.file.filename}`
          }
          e.deskripsi = req.body.deskripsi 
        }
      })
      res.send({
        error : "200",
        message : `Success Updated Portofolio`
      });
  }catch(e){
      res.send({
        error : "404",
        message : `Failed Updated Portofolio`
      });
  }
});


router.post('/testimoni',(req, res, next)=> {
    var uniq = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
    if(req.body.name != null){
      data.testimoni.push({
        id : uniq,
        date: formattedToday,
        email : req.body.email || "",
        name : req.body.name || "",
        rating : parseInt(req.body.rating) || "",
        deskripsi : req.body.deskripsi || ""
      })    
      res.send({
        error : "201",
        message : `Success Created Testimoni`
      });  
    }
});



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
        id : new Date().getTime(),
        date : formattedToday,
        ip_address  : req.body.ip_address,
        browser : req.body.browser || "Not Found",
        city : req.body.city || "Not Found",
        country : req.body.country || "Not Found",
        isp : req.body.isp || "Not Found",
        region : req.body.regionName || "Not Found",
      })    
      res.send({
        error : "201",
        message : `Success Created Visitors`
      });  
    }
});

router.all('/visimisi', (req, res, next)=> {
  if(req.body.visi != "" && req.body.misi){
    data.deskripsi = req.body.deskripsi;
  }else if(res.send(req.body.default) == "Default"){
    data.deskripsi = dataDefault.deskripsi;
  }
  res.redirect('/')
});



module.exports = router;


