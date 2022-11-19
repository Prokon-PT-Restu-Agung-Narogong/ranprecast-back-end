var express = require('express');
var router = express.Router();


/* GET dataHeader listing. */
let data = require('./data.js')
let dataDefault = require('./data-default.js')

router.get('/', function(req, res, next) {
  res.send(data);
});

router.get('/:req_title', function(req, res, next) {
  res.send(data[req.params.req_title]);
});

router.get('/produk/:id', (req,res,next)=>{
  const filterDataProduct = data.produk.filter((e)=>{
    return e.id.toUpperCase() == req.params.id.toUpperCase()
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

router.all('/nama', function(req, res, next) {
  if(req.body.nama != ""){
    data.nama = req.body.nama;
  }else if(res.send(req.body.default) == "Default"){
    data.nama = dataDefault.nama;
  }
  res.redirect('/')
});

router.all('/deskripsi', function(req, res, next) {
  if(req.body.deskripsi != ""){
    data.deskripsi = req.body.deskripsi;
  }else if(res.send(req.body.default) == "Default"){
    data.deskripsi = dataDefault.deskripsi;
  }
  res.redirect('/')
});

router.all('/visimisi', function(req, res, next) {
  console.log(req.body.visimisi);
  if(req.body.visi != "" && req.body.misi){
    data.deskripsi = req.body.deskripsi;
  }else if(res.send(req.body.default) == "Default"){
    data.deskripsi = dataDefault.deskripsi;
  }
  res.redirect('/')
});



module.exports = router;


