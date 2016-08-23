var passport = require('passport');
var localStartegy = require('passport-local');
var mongoose = require('mongoose');
var user = mongoose.model('User');

passport.use(new localStartegy({
    usernameField:'email'
},function(username,password,done){
    User.findOne({email:username},function(err,user){
        if(err){
            return done(err);
        }
        if(!user){
            return done(null,false,{message:"Can't find user"});
        }
        if(!user.validPassword(password)){
            return done(null,false,{message:"Incorrect password"});
        }
        return done(null,user);
    });
}));