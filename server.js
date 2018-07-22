const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieparser =require('cookie-parser');
const mangoose = require('mongoose');
const app = express();
const LocalStrategy = require('passport-local').Strategy;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
    secret: "myusersession"
}))
app.use(cookieparser());


app.use(passport.initialize());
app.use(passport.session());

mangoose.connect('mongodb://localhost/product')
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));

var userSchema = mangoose.Schema({
    name:String,
    password:String,
    cell:String,
    email:String
});
var UserModel = mangoose.model('user', userSchema);



passport.use(new LocalStrategy({usernameField:'name'},
    function (name, password, done) {
      
        UserModel.findOne({ name: name }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !=password){
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
  
    UserModel.findById(id, function (err, user) {
        done(err, user);
    });
});



app.post('/signup',function (req,res) {

    var newuser = new UserModel(req.body)
    newuser.save(function(err,user) {

        if(user){
        res.status(200);
        res.end("done");
            
        }

        else {
            res.status(500);
            res.end("error");

        }
        
    })

})

app.post('/login',passport.authenticate('local'),(req,res)=>{
    
    if (req.isAuthenticated()) {
        res.end("user login");        
    }
    else{
        res.end("not login")
    }
})

// app.get('/',(req,res)=>{
//     res.end("hi");
// })

app.post('/logout',(req,res)=>{
     
        req.logout()
        res.status(200);
        res.end("succfully lougout");
    
})
 
app.post('/dashboard',(req,res)=>{
if(req.isAuthenticated()){
   res.status(200);
   res.end("user  is authenticated");
}
else{
    res.status(500);
    res.end("user is not authenticated");
}
})

app.use(express.static('./build'));

const port = process.env.PORT || 8081;
app.listen(port, () => console.log('App listening on port ' + port));