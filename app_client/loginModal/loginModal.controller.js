(function(){
    angular.module('sportsStore')
    .controller('loginModalCtrl',['$uibModalInstance','$scope',function($uibModalInstance,$scope){
        var results = {};
        $scope.userLogin = function(){
            results.email = angular.copy($scope.loginName);
            results.password =angular.copy($scope.loginPassword);
            $uibModalInstance.close(results);
        };
        
        $scope.cancelLogin = function(){
            $uibModalInstance.dismiss('cancel');
        };
    }])
})();