var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Products = mongoose.model('Products');
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
module.exports = router;
