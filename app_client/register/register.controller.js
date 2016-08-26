(function(){
    angular.module('sportsStore')
    .controller('registerCtrl',['$scope','$http','authentication',function($scope,$http,authentication){
        var member = {};
        var confirmPassword = function(){
            return $scope.memberPassword === $scope.memberReconfirmPassword;
        };
        $scope.master = {};
        $scope.formRegister = function(){
            member = angular.copy($scope.user);
            //member.email = angular.copy($scope.user.email);
            //member.password = angular.copy($scope.user.password);
            //member.nickname = angular.copy($scope.user.nickname);
            authentication.register(member);
            console.log(member);
        };
        
        $scope.clearAll = function(){
            $scope.user = angular.copy($scope.master);
            console.log('clearFrom');
            
        };
    }]);
})();