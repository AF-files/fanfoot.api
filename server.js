var express = require('express');
var parser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost:27017/fantasy-football', { useNewUrlParser: true });

var app = express();

var Player = require('./models/player.js');
var TransferList = require('./models/transfers.js');

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

app.get('/players', function(req, res){
   Player.find({}, function(err, players){
       res.send(players);
   });
});

//Adds to the database
app.post('/players', function(req, res){
    var player = new Player();
    player.name = req.body.name;
    player.position = req.body.position;
    player.price = req.body.price;
    player.points = req.body.points;
    player.save(function(err, savedPlayer){
       if(err){
        res.staus(500).send({error:"Couldn't save player"});
       } else{
          res.send(savedPlayer); 
       }
    });
});

app.listen(3001, function(){
   console.log("It's working!"); 
});