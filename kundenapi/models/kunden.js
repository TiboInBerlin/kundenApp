var mongoose = require ('mongoose');

var kundenSchema = new mongoose.Schema({
  nachname : {
    type: String,
    required:"bitte Nachname eingeben!"
  },
  vorname : {
    type: String,
    required:"bitte Vorname eingeben!"
  },
  geschlecht: {
    type: String,
    required:"bitte Geschlecht eingeben!"
  },
  strasse : {
    type: String,
    required:"bitte Strasse eingeben!"
  },
  postleitzahl: {
    type: Number,
    required:"bitte Postleitzahl eingeben!"
  },
  ort: {
    type: String,
    required:"bitte Ort eingeben!"
  }
});

var Kunden = mongoose.model('Kunden', kundenSchema);

module.exports = Kunden;
