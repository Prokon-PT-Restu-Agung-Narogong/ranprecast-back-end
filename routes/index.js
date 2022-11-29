var express = require('express');
var router = express.Router();
var data = require('./data');
const configs = require('../config/configs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PT. Restu Agung Narogong',url : configs.base_url, data: data});
});

module.exports = router;
