/*
File Name: users.js
Author Name: Anthony Barszcz
Website Name: anthony-barszcz.heroku.com
File Description: The users JavaScript route.
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
