(function(){
    angular.module('sportsStore')
    .controller('checkoutCtrl',['$scope','$http','cart',function($scope,$http,cart){
        $scope.user.name="";
        $scope.user.address="";
        var cartData = cart.getProduct();
        var order = {};
        $scope.sendOrder = function(){
            var user = angular.copy($scope.user);
            order.user = user;
            order.cartData = cartData;
        }
    }]);
})();