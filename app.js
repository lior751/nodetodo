/*var MongoClient = require('mongodb').MongoClient,format=require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017', function(err,db)  {

  if(err)  throw err;
  else console.log("Connected!!!!");
  
  db.close();

});*/

var express = require('express');
var app = express();
var mongoose = require('mongoose');



var port = process.env.PORT || 3000;

app.use('assets', express.static(__dirname + "/public"));

app.set('view engine', 'ejs');

/*mongoose.connect("mongodb://127.0.0.1:27017", function(err,db) {

  if(err) throw err;
  
  var Schema = mongoose.Schema;

   var todoSchema = new Schema({

   username: String,
   todo: String,
   isDone: Boolean,
   hasAttachement: Boolean
});

 var Todos = mongoose.model('Todos', todoSchema);

});

*/




app.get('/', function(req,res) {res.send("Hi")});

app.listen(port);
