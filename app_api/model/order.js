var mongoose =require('mongoose');
var orderSchema = new mongoose.Schema({
    name:{
        type:String,
        rquired:true
    },
    address:{
        type:String,
        required:true
    },
    item:[]
});

mongoose.model('Order',orderSchema);