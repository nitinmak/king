

angular.module('starter')
  .controller('BoothMng', function ($ionicModal,$ionicPlatform,$cordovaSQLite,$cordovaProgress,$filter,$cordovaDatePicker,$ionicPopup,$cordovaLocalNotification,$scope,$state,$stateParams,LoginService,UtilService,$http,$q,$ionicLoading,$cordovaToast,localStorageService) {
    $scope.value = true;
    $scope.Frequently = true; 


    $scope.backtodashboard = function(){
       $state.go('main.voterlistCategory');
    };

     
      $ionicModal.fromTemplateUrl('views/boothPop.html', {
                scope: $scope,
                animation: 'slide-in-up'
              }).then(function(modal) {
                $scope.ModalB= modal;
              });

      $scope.OpenBoothPopup = function(cId) { 
       $scope.cid = cId;
       $scope.ModalB.show()
      };
              $scope.closeModalB = function() { 
                $scope.ModalB.hide();
              };
              // Cleanup the modal when we're done with it!
                $scope.$on('$destroy', function() {
                  $scope.ModalB.remove();
                });
              // Execute action on hide modal
              $scope.$on('modal.hidden', function() {
                // Execute action
              });
              // Execute action on remove modal
              $scope.$on('modal.removed', function() {
                // Execute action
              });

 });

