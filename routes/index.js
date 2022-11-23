var express = require('express');
var router = express.Router();
var data = require('./data');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PT. Restu Agung Narogong',url : 'http://localhost:3000', data: data});
});

module.exports = router;
