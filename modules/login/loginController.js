'use strict';

    var loginModule = angular.module('loginModule.controllers', []);

    loginModule.controller('loginCtrl', function($window,$scope,additionService){
   $scope.login = function(){
        var username = $scope.username;
		var password = $scope.password;
    if(username == 'admin' && password =='admin')
		{
			
		  $window.location.href = 'http://localhost:8080/bel-vms/#/home';
		}else{
			
		  
		}		
/*	additionService.getLoginService(username,password)
	 .then(function(data) {
       alert(data);
        }).catch(function(error){
            $log.error('ERROR:', error);
            throw error;
        });*/
        }
    });