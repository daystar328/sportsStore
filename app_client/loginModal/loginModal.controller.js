(function(){
    angular.module('sportsStore')
    .controller('loginModalCtrl',['$uibModalInstance','$scope',function($uibModalInstance,$scope){
        var results = {};
        $scope.userLogin = function(){
            results = angular.copy($scope.user);
            $uibModalInstance.close(results);
        };
        
        $scope.cancelLogin = function(){
            $uibModalInstance.dismiss('cancel');
        };
    }])
})();