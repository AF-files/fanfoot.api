var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var player = new Schema({
    name: String,
    position: String,
    price: Number,
    points: {type: Number, default: 0}
});

module.exports = mongoose.model('Player', player);