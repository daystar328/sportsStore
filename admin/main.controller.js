(function(){
    angular.module('sport2')
    .controller('mainCtrl',function(){
        $scope.screen = ['Products','Orders'];
        $scope.current = $scope.screen[0];
        $scope.setScreen = function(index){
        $scope.current = $scope.screen[index];
        };
        
        $scope.getScreen = function(){
            return $scope.current == 'Products' ? 'admProducts.html':'admOrders.html';
        };
    });
})();