(function(){
    angular.module('sportsStore')
    .controller('homeCtrl',['$http','$scope','cart',function($http,$scope,cart){
        $scope.products = [];
        $scope.selectedCategory = null;
        $scope.pageSize = 3;
        $scope.selectedPage = 1;
        $scope.selectCategory = function(product){
            //console.log('product= '+product);
            $scope.selectedCategory = product;
            console.log('selectedCategory = '+$scope.selectedCategory);
        };
        
        $scope.categoryFilter = function(product){
            return $scope.selectedCategory == null || $scope.selectedCategory == product.category;
        };
        
        $scope.selectButton = function(product){
            return $scope.selectedCategory == product ? "btn btn-primary":"";
        };
        
        $scope.selectPage = function(page){
            $scope.selectedPage = page+1;
            console.log($scope.selectedPage);
        };
        
        $scope.getSelectedPage = function(page){
            var pCon = ($scope.selectedPage == page);
            console.log('selected page = page ?'+pCon);
           return $scope.selectedPage == page ? "btn btn-primary":"btn btn-default";
        };
        
        $scope.addToCart = function(product){
            cart.addProduct(product.id,product.name,product.price);
        };
        $http.get('/api/products').success(function(data){
            console.log('fetch data success');
            console.log(data);
            $scope.products = data;
        }).error(function(err){
            console.log('fetch data error');
            console.log(err);
        });
    }]);
})();