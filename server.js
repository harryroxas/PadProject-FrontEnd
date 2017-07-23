var mysql = require('mysql');
var express = require('express');
var app = express();
var currentUser;
// Set up connection to database.
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sectumsempra",
  database: "iskollection"
});

// Connect to database.
con.connect();

app.get('/login', function(req, res){
  //if(sess.body) res.render('home');
    con.query("SELECT * FROM users WHERE email = '" + req.body.email + "' AND password = '" + req.body.password + "'", function (err, result, fields) {
    if(result.length > 0){  
      //res.redirect('/home');
      console.log("Logged in successfully");
      currentUser = result[0];
    }else{
      //res.redirect('/');
      console.log("Wrong email or password.");
    }
  });
});
