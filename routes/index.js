var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Products = mongoose.model('Products');
var User = mongoose.model('User');
/* GET home page. */
router.get('/products', function(req, res, next) {
  Products.find({})
  .exec(function(err,data){
      if(err){
          console.log(err);
          return;
      }
      if(!data){
          console.log("Can't find any product data");
      }else{
          res.json(data);
      }
  });
});

router.post('/sendorder',function(req,res){
    res.status(200);
    res.json({message:'thanks for your order!'});
});

router.post('/api/register',function(req,res){
    if(!req.body.name || !req.body.email || !req.body.nickname){
        res.status(401);
        res.json({message:'All fields required'});
        return;
    }
        var user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.nickname = req.body.nickname;
        user.setPassword(password);
        user.save(function(err){
            if(err){
                console.log(err);
            }else{
                res.status(200);
                res.json({message:"register success"});
            }
        });
});

router.post('/api/login',function(req,res){
   if(!req.body.email || !req.body.password){
       res.status(400);
       res.json({message:"All fields required"});
       return;
   } 
    passport.authenticate('local',function(err,user,info){
        if(err){
            res.status(400);
            res.json(err);
            return;
        }
        if(user){
            var token = user.generateJwt;
            res.status(200);
            res.json({"token":token});
        }else{
            res.status(401);
            res.json(info);
        }
    });
});
module.exports = router;
