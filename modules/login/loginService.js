'use strict';

    var loginModule = angular.module('loginModule.services', []);

    loginModule.service('additionService', function($http,$log) {
        
    
        
        //fetch customer data
        this.getLoginService = function(username,password){
		  var data;
		   // Simple GET request example:
		if(username == 'admin' && password =='admin')
		{
			data = { success: true };
		 
		}else{
			data = { success: false, message: 'Username or password is incorrect' };
		  
		}		
         return  data;
        };
        
    });