//producto.js
var express = require('express');
var controller = require('../controllers/productoController');
var router = express.Router();

router.get('/', function(req, res, next) {
  controller.show(req,res);
});

router.get('/detail/:id', function(req, res, next) {
  controller.detail(req,res);
});

router.post('/', function(req, res, next) {
  controller.create(req,res);
});

router.post('/update', function(req, res, next) {
  controller.update(req,res);
});

router.post('/delete', function(req, res, next) {
  res.send('producto delete function');
});

module.exports = router;