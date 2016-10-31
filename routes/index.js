/*
File Name: index.js
Author Name: Anthony Barszcz
Website Name: anthony-barszcz.heroku.com
File Description: The default JavasScript route
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Anthony Barszcz - Programmer'
  });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About'
  });
});

/* GET Knowledge page. */
router.get('/knowledge', function(req, res, next) {
  res.render('knowledge', {
    title: 'Knowledge'
  });
});

/* GET Skills page. */
router.get('/skills', function(req, res, next) {
  res.render('skills', {
    title: 'Skills'
  });
});

module.exports = router;
