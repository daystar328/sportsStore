(function(){
    angular.module('sportsStore')
    .controller('registerCtrl',['$scope','$http','authentication',function($scope,$http,authentication){
        var member = {};
        $scope.user = {};
        //var isMail = false;
        
        $scope.confirmPassword = function(){
            return $scope.user.password === $scope.user.confirmPassword;
        };
        $scope.master = {};
        $scope.formRegister = function(){
            member = angular.copy($scope.user);
            //member.email = angular.copy($scope.user.email);
            //member.password = angular.copy($scope.user.password);
            //member.nickname = angular.copy($scope.user.nickname);
            authentication.register(member);
            console.log(member);
        };
        
        $scope.clearAll = function(){
            $scope.user = angular.copy($scope.master);
            console.log('clearFrom');
            
        };
        
        $scope.checkMail = function(){
            console.log('invoke check mail');
            $scope.mailError = "";
            $scope.mailOk = "";
            var mailAddress = angular.copy($scope.user.email);
            console.log('register controller mail Address :'+mailAddress);
            if(!mailAddress){
                $scope.mailError = "Please enter a mail address";
                return;
            }
            
            $http.post('/api/checkmail',{"mailAddress":mailAddress}).success(function(mailexist){
                        console.log('is mail exist ? '+mailexist.exist);
                        var isMail =  angular.copy(mailexist.exist);
                        if(isMail == true){
                            $scope.mailError = "This mail has been used,please change another mail address";
                            $scope.mailOk = "";
                        }
                        if(isMail == false){
                            $scope.mailError = "";
                            $scope.mailOk = "Ok!";
                        } 
                        }).error(function(err){console.log('Check mail fail :'+err)});
                };
                        
            
             
        }
        
    ]);
})();