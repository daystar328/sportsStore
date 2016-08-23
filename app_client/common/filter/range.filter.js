(function(){
    angular.module('sportsStore')
    .filter('range',function(){
        return function(data,page,size){
            var start_index = (page-1)*size;
            return data.slice(start_index);
        };
    });
})();