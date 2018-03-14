var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var PORT = process.env.PORT || 3000;
mongoose.Promise = Promise;

const databaseUri = 'mongodb://localhost/Ui';

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(databaseUri);
}

var User = require("./userModel.js");
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); 

app.post('/post-user', function (req, res) {
  
    User.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
    //   res.json(dbUser);
    location.reload();
})
    .catch(function(err) {
      // If an error occurs, send the error to the client
      if(err.errors){
          console.log(err.errors);
      
    }
      
    });
});

app.get('/view-users',  function(req, res) {
    User.find({}).sort('-date').exec(function(err, users) {
        return res.end(JSON.stringify(users));
    });
});

app.delete('/clear-data',  function(req, res) {
    User.remove({}).exec(function(err, users) {
        return res.send("Data Deleted");
    });
});
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });