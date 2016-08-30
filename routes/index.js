var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Products = mongoose.model('Products');
var Users = mongoose.model('Users');
var passport = require('passport');
var Order = mongoose.model('Order');
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
    console.log('order req: '+req.body.address);
    var order = new Order();
    order.name = req.body.name;
    order.address = req.body.address;
    order.item = req.body.item
    order.save(function(err){
        if(err){
            console.log(err);
            return;
        }
        res.status(200);
        res.json({message:'thanks for your order!'});
    })
    
});

router.post('/register',function(req,res){
    console.log('register req: '+req.body);
    if(!req.body.name || !req.body.email || !req.body.nickname){
        res.status(401);
        res.json({message:'All fields required'});
        return;
    }
        var users = new Users();
        users.name = req.body.name;
        users.email = req.body.email;
        users.nickname = req.body.nickname;
        users.setPassword(req.body.password);
        users.save(function(err){
            if(err){
                console.log('mongoose error :'+err);
            }else{
                var token = users.generateJwt();
                res.status(200);
                res.json({"token":token});
            }
        });
});

router.post('/login',function(req,res){
    console.log('request body :'+req.body.email);
   if(!req.body.email || !req.body.password){
       res.status(400);
       res.json({message:"All fields required"});
       return;
   }
   console.log("I'm here");
    passport.authenticate('local',function(err,user,info){
        console.log('auth user');
        if(err){
            console.log(err);
            res.status(400);
            res.json(err);
            return;
        }
        if(user){
            console.log(user);
            var token = user.generateJwt();
            console.log('token is :'+token);
            res.status(200);
            res.json({"token":token});
        }else{
            console.log(info);
            res.status(401);
            res.json(info);
        }
    })(req,res);
    
});

router.post('/checkmail',function(req,res){
    console.log('checking mail address');
    Users.findOne({email:req.body.mailAddress},function(err,mailAddress){
        if(err){
            res.status(401);
            console.log(err);
            return;
        }
        if(mailAddress){
            res.status(200)
            console.log('This mail already been used');
            res.json({"exist":true});
        }else{
            res.status(200);
            console.log('valid mail address');
            res.json({"exist":false});
        }
    });
});

module.exports = router;
