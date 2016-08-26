var passport = require('passport');
var localStartegy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Users = mongoose.model('Users');

passport.use(new localStartegy({
    usernameField:'email'
},function(username,password,done){
    console.log('finding user');
    Users.findOne({email:username},function(err,user){
        if(err){
            console.log(err);
            return done(err);
        }
        if(!user){
            console.log('no user');
            return done(null,false,{message:"Can't find user"});
        }
        if(!user.validPassword(password)){
            console.log('wrong password');
            return done(null,false,{message:"Incorrect password"});
        }
        return done(null,user);
    });
}));