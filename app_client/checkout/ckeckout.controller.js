(function(){
    angular.module('sportsStore')
    .controller('checkoutCtrl',['$scope','cart',function($scope,cart){
        $scope.items = [];
        $scope.items = cart.getProducts();
        $scope.remove = function(item){
            for(var i=0;i<$scope.items.length;i++){
                if($scope.items[i].name == item.name){
                    items.splice(i,1);
                }
            }
        }
    }]);
})();