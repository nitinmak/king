'use strict';
/**
 Khusir
 */
angular.module('starter')
  .controller('MainCtrl', function ($scope,$state,LoginService,UtilService,$http,$q,$ionicLoading,$ionicPopup,localStorageService) {
  	  
       $scope.backtohomepage = function(){
        $state.go('main.home');
  	  };
  	  
      
      
 });
