(function(){
    angular.module('sportsStore')
    .service('authentication',['$window','$http',function($window,$http){
        var getToken = function(){
            return $window.localStorage['sportsStore'];
        };
        
        var saveToken = function(token){
            $window.localStorage['sportsStore'] = token;
        };
        
        var isLoggin = function(){
            var token = getToken();
            console.log('getToken: '+token);
            if(token){
                var payload = JSON.parse($window.atob(token.split('.')[1]));
                return payload.exp > Date.now()/1000;
            }else{
                return false;
            }
        };
        
        var currentUser = function(){
            if(isLoggin){
                var token = getToken();
                var payload = JSON.parse($window.atob(token.split('.')[1]));
                return {
                    email:payload.email,
                    name:payload.name
                };
            };    
        };
        
        var register = function(user){
            $http.post('/api/register',user).success(function(data){
                saveToken(data.token);
            }).error(function(err){
                console.log(err);
            });
        };
        
        var login = function(user){
            $http.post('/api/login',user).success(function(data){
                saveToken(data.token);
                $window.location.reload();
            }).error(function(err){
                console.log(err);
            });
        };
        
        var logout = function(){
            localStorage.removeItem('sportsStore');
        };
        
        return {
            getToken:getToken,
            saveToken:saveToken,
            isLoggin:isLoggin,
            register:register,
            login:login,
            logout:logout
        };
    }]);
})();