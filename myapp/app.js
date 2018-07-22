var express = require('express');
var app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var LocalStrategy = require("passport-local").Strategy;
var flash = require('connect-flash');
var passport = require('passport');


mongoose.connect("mongodb://localhost:27017/test");
var userSchema = mongoose.Schema({
  name: String,
  pass: String
});
var user = mongoose.model('user', userSchema);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser());
app.use(session({secret: "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX"}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use("login", new LocalStrategy(
function(username, password, done) {
  User.findOne({ username: username }, function(err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false,
  { message: "No user has that username!" });
  }
  user.checkPassword(password, function(err, isMatch) {
  if (err) { return done(err); }
  if (isMatch) {
  return done(null, user);
  } else {
  return done(null, false,
{ message: "Invalid password." });
  }
  });
  });
  }));

passport.serializeUser(function(user, done) {
  done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
  done(err, user);

  });
  });



  app.post("/signup", function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    user.findOne({ username: username }, function(err, user) {
    if (err) { return next(err); }
    if (user) {
    req.flash("error", "User already exists");
    return res.redirect("/signup");
    }
    var newUser = new user({
    username: username,
    password: password
    });
    newUser.save(next);
    res.end("ddone")
    });
    })


app.use(express.static('public'));


app.listen(3000);