var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/index', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/maitra', function (req, res, next) {
  res.render('maitra');
});

router.get('/vijay', function (req, res, next) {
  res.render('vijay');
});

router.get('/niranjana', function (req, res, next) {
  res.render('niranjana');
});


module.exports = router;
