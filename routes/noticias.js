// routes/noticias.js
//producto.js
var express = require('express');
var controller = require('../controllers/noticiaController');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // controller.show(req, res);
  res.render('noticia',function(err,html){
    if(err) throw err;
    res.render('layouts/layout',{
        tituloSeccion: 'Noticias',
        seccion: html
      });
  });
});

router.get('/listar', function(req, res, next) {
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
