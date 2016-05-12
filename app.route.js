'use strict';

var myApp = angular.module('myApp', ['ngRoute','demoModule','loginModule','ngCookies','pascalprecht.translate']);
myApp.controller('LangCtr', function($translate, $scope ,$filter){

$scope.languages = {
    "en"	:$translate.instant('BUTTON_LANG_EN'),
    "hi"	:$translate.instant('BUTTON_LANG_HI') 
  };
 $scope.selectedlanguage =localStorage.getItem('selectedLanguage') || 'en';	
 $scope.changeLanguage = function (langKey) {
		if(langKey == 'hi')
		{
		$.getScript("assets/js/lib/Angular/1.5.5/angular-i18n/angular-locale_hi.js");
		}
		else if(langKey == 'de')
		{
		$.getScript("assets/js/lib/Angular/1.5.5/angular-i18n/angular-locale_de.js");
		}
		else{
		$.getScript("assets/js/lib/Angular/1.5.5/angular-i18n/angular-locale_en.js");
		}
		localStorage.setItem('selectedLanguage', langKey);
		$translate.use(langKey);
      };
});
myApp.config([ '$routeProvider', '$locationProvider','$translateProvider',
    function($routeProvider, $locationProvider,$translateProvider) {
	
	$translateProvider.useStaticFilesLoader({
        prefix: '../bel-vms/common/JsonLang/en-',
        suffix: '.json'
    });
	$translateProvider.useSanitizeValueStrategy(null);
	$translateProvider.preferredLanguage('en');
	//$.getScript("assets/js/lib/Angular/1.5.5/angular-i18n/angular-locale_en.js");
	$translateProvider.useLocalStorage();// saves selected language to localStorage   
        $routeProvider
            .when('/addition', {
             templateUrl : 'modules/demo/views/get-sum.html',
             controller : 'demoCtrl'
            }).when('/login', {
             templateUrl : 'modules/login/login.html',
             controller : 'loginCtrl'
            }).when('/home', {
             templateUrl : 'modules/home/index.html',
           //  controller : 'homeCtrl'
            }).otherwise({
             redirectTo : '/login'
            });
    }]);