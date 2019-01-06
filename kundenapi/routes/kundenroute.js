const express = require('express');
const router = express.Router();
var db = require('../models');

//Standardmäßig werden wir alle kunden listen
router.get('/', function(req, res){
  db.Kunden.find()
  .then(function(kunden){
    res.json(kunden);
  })
  .catch(function(err){
    res.send(err);
  })
});

//POST/kunden: Route um neuen Kunden zu erstellen
router.post('/', function(req,res){
  console.log(req.body)
  db.Kunden.create(req.body)
  .then(function(neueKunde){
    res.status(201).json(neueKunde);
  })
  .catch(function(err){
    res.send(err);
  })
});

module.exports = router;
