(function(){
    angular.module('sportsStore')
    .controller('naviCtrl',['authentication','$scope',function(authentication,$scope){
       $scope.isLoggin = authentication.isLoggin();
        console.log("Log in ?"+$scope.isLoggin);
    }]);
})();