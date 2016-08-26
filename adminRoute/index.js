var express = express();
var route = express.route();
var mongoose = require('mongoose');
var Users = mongoose.model('Users');

route.post('/login',function(req,res){
    console.log('adm login data :'+req.body);
    if(!req.body.name || !req.body.password){
        res.status(401);
        res.json({message:"All fields required"});
        return;
    }
    passport.authenticate('local',function(error,user,info){
        if(error){
            console.log(error);
            res.json(error);
            return;
        }
        if(!user){
            res.json(info);
            return;
        }
        var token = user.generateJwt();
        res.json({"token":token});
        
    })(req,res);
    
})