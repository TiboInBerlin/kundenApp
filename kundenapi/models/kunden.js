var mongoose = require ('mongoose');

var kundenSchema = new mongoose.Schema({
  nachname : {
    type: String,
    required: 'Bitte Nachname eingeben'
  },
  vorname : {
    type: String,
    required: 'Bitte Vorname eingeben'
  },
  geschlecht : {
    type: String,
    required: 'Bitte Geschlecht eingeben'
  },
  strasse : {
    type: String,
    required: 'Bitte Strasse eingeben'
  },
  postleitzahl: {
    type: Number,
    required: 'Bitte Postleitzahl eingeben'
  },
  ort: {
    type: String,
    required: 'Bitte Ort eingeben'
  }
});

var Kunden = mongoose.model('Kunden', kundenSchema);

module.exports = Kunden;
