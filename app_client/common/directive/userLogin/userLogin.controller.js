(function(){
    angular.module('sportsStore')
    .controller('loginCtrl',['$modal','$scope','authentication',function($modal,$scope,authentication){
        $scope.login = function(){
            var modalInstance = $modal.open({
                templateUrl:"/loginModal/loginModal.html",
                controller:'/loginModalCtrl',
                
            });
            
            modalInstance.results.then(function(data){
                authentication.login(data);
            });
        };
    }])
})()l;