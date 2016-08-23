(function(){
    angular.module('sportsStore')
    .filter('unique',function(){
        return function(data,propertyName){
            var results = [];
            var keys = {};
            if(angular.isArray(data,propertyName)&&angular.isString(propertyName)){
                for(let i=0;i<data.length;i++){
                    var val  = data[i][propertyName];
                    if(angular.isUndefined(keys[val])){
                        keys[val] = true;
                        results.push(data[i][propertyName]);
                       }
                }
                //console.log('data:'+data);
                //console.log('results:'+results);
                return results;
            }else{
                return data;
            }
        };
    });
})();