var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = Schema({
	title: String,
	image: String,
	url: String
});

module.exports = mongoose.model('Photo', PhotoSchema);