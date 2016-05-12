'use strict';

    var demoModule = angular.module('demoModule.controllers', []);

    demoModule.controller('demoCtrl', function($scope,additionService){
        
        //sum of two numbers
        $scope.valueA = 10;
        $scope.valueB = 20;
        $scope.sum = 0;
        
        $scope.getSum = function (){
           //$scope.sum = parseInt($scope.valueA) + parseInt($scope.valueB );
           $scope.sum = additionService.getSum($scope.valueA , $scope.valueB);
        };
        
        //fetch customer data
        additionService.getCustomers()
        .then(function(data) {
            $scope.customers = data;
        }).catch(function(error){
            $log.error('ERROR:', error);
            throw error;
        });
        
        $scope.example1 = 1;
        $scope.example2 = 2;
        $scope.example3 = 3;
        $scope.example4 = 4;
        $scope.example5 = 777;
        $scope.example6 = 1901;
        $scope.example7 = 0;
        $scope.example8 = 'Seven';
        
    });