'use strict';

    var demoModule = angular.module('demoModule.services', []);

    demoModule.service('additionService', function($http,$log) {
        
        //sum of two numbers
        this.getSum = function (valueA,valueB){
            return parseInt(valueA) + parseInt(valueB);
        };
        
        //fetch customer data
        this.getCustomers = function(){
        // Simple GET request example:
        return $http({
          method: 'GET',
          url: '/bel-webservice/customers.json',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function (response) {
            //this callback will be called asynchronously
            //when the response is available
            return response.data;
            
        }).catch(function(error){
            $log.error('ERROR:', error);
            throw error;
        });
        };
        
    });