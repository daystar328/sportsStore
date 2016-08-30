(function(){
    angular.module('sport2')
    .controller('admLoginCtrl',['$location','$scope',function($location,$scope){
        var user = {};
        $scope.admLogin = function(){
                user.email = angular.copy($scope.admin.email);
                user.password = angular.copy($scope.admin.password);
                $http.post('/adm/login',user).success(function(token){
                    $window.localStorage['admStorage'] = token;
                    $location.path('/main');
                }).error(function(err){
                    console.log(err);
                });
        }
    }]);
})();