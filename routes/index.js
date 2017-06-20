var express = require('express');
var router = express.Router();

var path = require('path');
var fs = require('fs');
var filePath = path.resolve(path.dirname(__dirname), 'data/products.json');


var products = JSON.parse(fs.readFileSync(filePath, 'utf8'));

/* GET home page. */
router.get('/index.html', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    products: products
  });
});

router.get('/products', function(req, res, next) {
  res.json(products);
});


module.exports = router;
