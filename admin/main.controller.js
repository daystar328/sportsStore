(function(){
    angular.module('sport2')
    .controller('mainCtrl',function(){
        var user = {};
        $scope.screen = ['Products','Orders'];
        $scope.current = $scope.screen[0];
        
        $scope.setScreen = function(index){
            $scope.current = $scope.screen[index];    
        };
        
        $scope.getScreen = function(){
            return $scope.current == 'Products' ? 'admProducts.html':'admOrders.html';
        };
        
        $scope.admLogin = function(){
                  user.name = angular.copy($scope.admin.name);
                  user.password = angular.copy($scope.admin.password);
              $http.post('/api/adminLogin',user).success(function(token){
                  console.log('adm token is: '+token);
                  $window.localStorage['adminStore'] = token;
                  $location.path('/main');
              }).error(function(err){console.log(err)});
        };
    });
})();