var mongoose = require('mongoose');
var dbUrl = "mongodb://localhost/sportsStore";

mongoose.connect(dbUrl);

mongoose.connection.on('connected',function(){
    console.log('DB connected');
});

mongoose.connection.on('disconnected',function(){
    console.log('DB offline');
});

mongoose.connection.on('error',function(err){
    console.log(err);
});

require('./products');
require('./user');
require('./order');