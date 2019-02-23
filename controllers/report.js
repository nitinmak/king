

angular.module('starter')
  .controller('ReportCtrl', function ($filter,$ionicPopup,$cordovaLocalNotification,$scope,$state,$stateParams,LoginService,UtilService,$http,$q,$ionicLoading,$cordovaToast) {
    
    $scope.backtodashboard = function(){
       $state.go('mainapp.dashboard');
    };




});

