var mongoose = require('mongoose');
var productsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});

mongoose.model('Products',productsSchema);