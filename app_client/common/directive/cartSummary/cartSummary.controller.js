(function(){
    angular.module('sportsStore')
    .controller('cartSummaryCtrl',['$scope','cart','$http','$location',function($scope,cart,$http,$location){
                var cartData = cart.getProducts();
                $scope.cartItems = cartData;
                $scope.total = function(){
                    var totalPrice = 0;
                    for(var i=0;i<cartData.length;i++){
                        totalPrice += cartData[i].price*cartData[i].count;
                    }
                    return totalPrice;
                };
                
                $scope.itemCount = function(){
                    var items = 0;
                    for(var i=0;i<cartData.length;i++){
                        items += cartData[i].count;
                    }
                    return items;
                }
                $scope.remove = function(item){
                    for(var i=0;i<$scope.cartItems.length;i++){
                        if($scope.cartItems[i].name == item.name){
                            $scope.cartItems.splice(i,1);
                        }
                    }
                };
        
                $scope.sendOrder = function(){
                    var order = {};
                    order.item = $scope.cartItems;
                    order.name = $scope.shippingName;
                    order.address = $scope.shippingAddress;
                    $http.post('/api/sendorder',order).success(function(data){
                        console.log(data);
                        cartItem = [];
                       $location.path('/complete');
                    }).error(function(err){
                        console.log(err);
                    });
                }
            }]);
})();