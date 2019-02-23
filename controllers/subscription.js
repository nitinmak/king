

angular.module('starter')
  .controller('SubscriptionCtrl', function ($ionicPopup,$scope,$state,$stateParams,LoginService,UtilService,$http,$q,$ionicLoading,$cordovaToast) {
    
    $scope.backtodashboard = function(){
       $state.go('mainapp.dashboard');
    };

});

