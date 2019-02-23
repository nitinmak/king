

angular.module('starter')
  .controller('AboutCtrl', function ($scope,$state,$stateParams) {
    
    $scope.backtodashboard = function(){
       $state.go('mainapp.dashboard');
    };

});

