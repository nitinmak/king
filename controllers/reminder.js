

angular.module('starter')
  .controller('ReminderCtrl', function ($cordovaLocalNotification,$scope,$state,$stateParams,LoginService,UtilService,$http,$q,$ionicLoading,$cordovaToast,localStorageService) {
    
    $scope.value = true;
   
    $scope.backtodashboard = function(){
       $state.go('mainapp.dashboard');
    };
    
   
   });

