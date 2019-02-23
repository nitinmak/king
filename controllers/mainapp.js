'use strict';

/**
 Subhajit
 */
angular.module('starter')
  .controller('MainappCtrl', function ($ionicActionSheet,$cordovaActionSheet,$scope,$state,$ionicPopup,$ionicLoading,localStorageService,LoginService,UtilService,$http,$q) {
                $scope.value = true; 
                $scope.checked = false;
                $scope.size = '100px';
                
                $scope.toggle = function() {
                    $scope.checked = !$scope.checked
                };

                $scope.mockRouteChange = function () {
                    $scope.$broadcast('$locationChangeStart');
                };

                $scope.onopen = function () {
                    alert('Open');
                };

                $scope.onclose = function () {
                    alert('Close');
                };
                
                $scope.backtodashboard = function(){
                  $state.go('mainapp.dashboard');
                };

                      
                

                
            
 
 });
