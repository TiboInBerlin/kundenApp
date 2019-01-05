var mongoose = require ('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/kunden-api');

mongoose.Promise = Promise;

module.exports.Kunden = require("./kunden");
