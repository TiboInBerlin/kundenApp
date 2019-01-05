var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res){
  db.Kunden.find()
  .then(function(kunden){
    res.json(kunden);
  })
  .catch(function(err){
    res.send(err);
  })
});

module.exports = router;
