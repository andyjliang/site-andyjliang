require('babel-register');

// Modules
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var logger = require('morgan');

var Post = require('./models/Post')
	
var app = express();
var PORT = (process.env.PORT || 5000);

// Mongo DB Connection
var MONGODB_URL = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URL)
	.then(() => {
		console.log("successful connection to mongo db");
	},
	err	=> {
		console.log("failed connection to mongo db " + err);
	});


// Logging
console.log('MongoDB Connection using: ' + MONGODB_URL);
console.log('Port Used: ' + PORT);

app.set('port', PORT);
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/api/blog', function(req, res) {
	Post.find().exec((err, data) => {
    if (err) res.send(err);

    res.send(data);
  })

});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



