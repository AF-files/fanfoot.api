var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectID = mongoose.Schema.Types.ObjectId;

var transfers = new Schema({
    title: {type: String, default: "Premier League"},
    players:[{type: ObjectID, ref:'Player'}]
});

module.exports = mongoose.model('Transfers', transfers);