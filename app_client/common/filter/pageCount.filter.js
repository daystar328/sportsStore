(function(){
    angular.module('sportsStore')
    .filter('pageCount',function(){
        
       return function(data){
           var pageNo = [];
           for(var j=0;j<Math.ceil(data.length/3);j++){
               pageNo.push(j);
           }
           console.log(pageNo);
           return pageNo;
       }
    });
})();