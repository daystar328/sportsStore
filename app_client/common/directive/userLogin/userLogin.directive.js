(function(){
    angular.module('sportsStore')
    .directive('userLogin',function(){
        return {
            restrict:'EA',
            templateUrl:"/common/directive/userLogin/userLogin.html"
        };
    });
})();