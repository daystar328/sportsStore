(function(){
    angular.module('sport2',['ngRoute'])
    .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
        $routeProvider
        .when('/login',{
            templateUrl:'login.html',
            controller:'admLoginCtrl'
        })
        .when('/main',{
            templateUrl:'main.html'
        })
        .otherwise({redirectTo:'/login'});
    }]);
})();