(function(){
    angular.module('sportsStore')
    .directive('cartSummary',['cart',function(cart){
        return {
            restrict:'E',
            templateUrl:'/common/directive/cartSummary/cartSummary.html',
            controller:'cartSummaryCtrl'
        }
    }]);
})();