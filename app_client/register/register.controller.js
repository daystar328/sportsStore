(function(){
    angular.module('sportsStore')
    .controller('registerCtrl',['$scope','$http','authentication',function($scope,$http,authentication){
        var member = {};
        var confirmPassword = function(){
            return $scope.memberPassword === $scope.memberReconfirmPassword;
        };
        
        $scope.register = function(){
            member.name = angular.copy($scope.memberName);
            member.email = angular.copy($scope.memberEmail);
            memebr.password = angular.copy($scope.memberPassword);
            authentication.register(member);
        };
        
        $scope.clearAll = function(){
            $scope.memberName = "";
            $scope.memberEmail = "";
            
        }
    }]);
})();