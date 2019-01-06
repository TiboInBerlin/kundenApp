var mongoose = require ('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/kunden-api', { useNewUrlParser: true });



mongoose.Promise = Promise;

module.exports.Kunden = require("./kunden");
