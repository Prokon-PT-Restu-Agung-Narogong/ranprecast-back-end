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


router.all('/login',(req, res, next)=>{
  try{
    let found = false;
    data.useradmin.forEach((e)=>{
      if(e.username == req.body.username && e.password == req.body.password){
        found = true;
        res.send({
          status : "200",
          data : e,
        });
      }
    })
    if(!found){
      res.send({
        status : "505",
        message : "Username Dan Password Tidak Di Temukan"
      })      
    }
  }catch(e){
    res.send({
      status : "404",
      message : `Failed Select User Admin`
    });
  }
})

router.post('/useradmin/delete', (req,res,next)=>{
  try{
    const objWithIdIndex = data.useradmin.findIndex((obj) => obj.id == req.body.id);

    if (objWithIdIndex > -1) {
      data.useradmin.splice(objWithIdIndex, 1);
      res.send({
        status : "200",
        message : `Success Delete User Admin`
      });   
    }
  }catch(e){
    res.send({
      status : "404",
      message : `Failed Delete User Admin`
    });
  }
})

router.post('/useradmin/add', (req, res, next)=>{
  try{
    var uniq = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);
    data.useradmin.push({
        id : uniq,
        username : req.body.username,
        password : req.body.password,
        type : req.body.type,
    });
    res.send({
      status : "200",
      message : `Success Insert User Admin`
    });
  }catch(e){
    res.send({
      status : "404",
      message : `Failed Insert User Admin`
    });
  }
})

router.post('/useradmin', (req, res, next)=>{
  try{
    data.useradmin.find((e)=>{
      if(e.id == req.body.id){
        e.username = req.body.username;
        e.password = req.body.password;
        e.type = req.body.type;
      }
    });
    res.send({
      status : "200",
      message : `Success Updated User Admin`
    });
  }catch(e){
    res.send({
      status : "404",
      message : `Failed Updated User Admin`
    });
  }
})

router.get('/useradmin/:id', (req,res,next)=>{
  const filterData = data.useradmin.filter((e)=>{
    return e.id == req.params.id
  })
  if(filterData.length != 0){
    res.send(filterData)
  }else{
    res.send({
      status : "505",
      message : `We No Have User Admin By ID ${req.params.id}`
    });
  }
})

router.post('/testimoni/delete', (req,res,next)=>{
  try{
    const objWithIdIndex = data.testimoni.findIndex((obj) => obj.id == req.body.id);

    if (objWithIdIndex > -1) {
      data.testimoni.splice(objWithIdIndex, 1);
      res.send({
        status : "200",
        message : `Success Delete Testimoni`
      });   
    }
  }catch(e){
    res.send({
      status : "404",
      message : `Failed Delete Testimoni`
    });
  }
})

router.post('/keunggulan',multerSingle({req_name : "image", location_path : "./public/images/keunggulan/"}), (req, res, next)=>{
  try{
    data.keunggulan.find((e)=>{
      if(e.id == req.body.id){
        e.icon = (req.file) ? `${configs.base_url}/images/keunggulan/${req.file.filename}` : e.icon;
        e.deskripsi = req.body.deskripsi;
      }
    });
    res.send({
      status : "200",
      message : `Success Updated keunggulan`
    });
  }catch(e){
    res.send({
      status : "404",
      message : `Failed Updated keunggulan`
    });
  }
})

router.get('/keunggulan/:id', (req,res,next)=>{
  const filterData = data.keunggulan.filter((e)=>{
    return e.id == req.params.id
  })
  if(filterData.length != 0){
    res.send(filterData)
  }else{
    res.send({
      status : "505",
      message : `We No Have Quality By ID ${req.params.id}`
    });
  }
})

router.post('/tentang',multerSingle({req_name : "image", location_path : "./public/images/tentang/"}), (req, res, next)=>{
  try{
    data.tentang.nama = req.body.nama;
    data.tentang.deskripsi = req.body.deskripsi;
    data.tentang.visi = req.body.visi;
    data.tentang.misi = req.body.misi;
    data.tentang.logo = (req.file) ? `${configs.base_url}/images/tentang/${req.file.filename}` : data.tentang.logo
    res.send({
      status : "200",
      message : `Success Updated Tentang`
    });
  }catch(e){
    res.send({
      status : "404",
      message : `Failed Updated Tentang`
    });
  }
})

router.post('/kontak', (req, res, next) =>{
  try{
    data.kontak.alamat_1 = req.body.alamat_1;
    data.kontak.alamat_2 = req.body.alamat_2;
    data.kontak.telepon = req.body.telepon;
    data.kontak.email = req.body.email;
    data.kontak.whatsapp_1 = req.body.whatsapp_1;
    data.kontak.whatsapp_2 = req.body.whatsapp_2;
    data.kontak.link_instagram = req.body.link_instagram;
    data.kontak.link_youtube = req.body.link_youtube;
    res.send({
      status : "200",
      message : `Success Updated Kontak`
    });
  }catch(e){
    res.send({
      status : "404",
      message : `Failed Updated Kontak`
    });
  }
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
        status : "200",
        message : `Success Tambah Portofolio`
      });
  }catch(e){
    res.send({
      status : "404",
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
      status : "505",
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
            status : "200",
            message : `Success Update Product`
          });
        }
    });
  }catch(e){
    res.send({
      status : "404",
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
        status : "200",
        message : `Success Delete Product`
      });   
    }
  }catch(e){
    res.send({
      status : "404",
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
      status : "505",
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
        status : "200",
        message : `Success Delete Portofolio`
      });   
    }
  }catch(e){
    res.send({
      status : "404",
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
        status : "200",
        message : `Success Delete Portofolio`
      });
    }else{
      throw status;
    }
  }catch(e){
    res.send({
      status : "404",
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
        status : "200",
        message : `Success Updated Portofolio`
      });
  }catch(e){
      res.send({
        status : "404",
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
        status : "201",
        message : `Success Created Testimoni`
      });  
    }
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
        status : "201",
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

router.get('/:req_title', (req, res, next)=> {
  res.send(data[req.params.req_title]);
});

module.exports = router;


