var mongoose = require('mongoose');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    hash:String,
    salt:String
});

userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password,salt,1000,64).toString('hex');
};

userSchema.methods.validPassword = function(password){
    var hash  = crypto(password,this.salt,1000,64).toString('hex');
    return this.hash === hash;
};
    
userSchema.methods.generateJwr = function(){
    var expiry = new Date();
    expiry.setDate(expiry.getDate()+7);
    return jwt.sign({
        email:this.email,
        name:this.name,
        exp:parseInt(expiry.getTime()/1000)
    },process.env.JWT_SECRET);
};


mongoose.model('User',userSchema);