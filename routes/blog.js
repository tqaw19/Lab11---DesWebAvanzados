// routes/noticias.js
//noticia.js
var express = require('express');
var controller = require('../controllers/blogController');
var router = express.Router();

/* GET users listing. */
router.get('/news', function(req, res, next) {
  controller.show(req, res);
});

/* GET users listing. */
router.get('/detalle/:id', function(req, res, next) {
    controller.detail(req, res);
  });

/* GET users listing. */
router.post('/crear', function(req, res, next) {
    controller.create(req, res);
  });

/* GET users listing. */
router.post('/actualizar', function(req, res, next) {
    controller.update(req, res);
  });

/* GET users listing. */
router.post('/eliminar', function(req, res, next) {
    controller.delete(req, res);
  });

module.exports = router;
