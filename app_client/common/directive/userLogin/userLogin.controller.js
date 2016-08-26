(function(){
    angular.module('sportsStore')
    .controller('loginCtrl',['$uibModal','$scope','authentication',function($uibModal,$scope,authentication){
        $scope.login = function(){
            var modalInstance = $uibModal.open({
                templateUrl:"/loginModal/loginModal.html",
                controller:'loginModalCtrl',
                
            });
            
            modalInstance.result.then(function(data){
                authentication.login(data);
            });
            $window.location.reload();
        };
    }])
})();