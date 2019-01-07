var express = require('express');
var router = express.Router();
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

//Kunde mit spezifischen id erhalten
router.get('/:id', function(req, res){
  db.Kunden.findById(req.params.id)
    .then(function(idFound){
      res.json(idFound);
    })
    .catch(function(err){
      res.send(err);
    })
});

//Kunden bearbeiten
router.put('/:id', function (req, res){
  //res.send("update route!");
  db.Kunden.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
  .then(function(kunde){
    res.json(kunde);
  })
  .catch(function(err){
    res.send(err);
  })
});

//Kunden löschen
router.delete('/:id', function (req, res){
  db.Kunden.remove({_id: req.params.id})
  .then(function(){
    res.json({message: 'kunde wurde gerade gelöscht!'});
  })
  .catch(function(err){
    res.send(err);
  });
});


module.exports = router;
