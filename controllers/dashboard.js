

angular.module('starter')
  .controller('DashboardCtrl', function ($ionicModal,$ionicPlatform,$cordovaSQLite,$cordovaProgress,$filter,$cordovaDatePicker,$ionicPopup,$cordovaLocalNotification,$scope,$state,$stateParams,LoginService,UtilService,$http,$q,$ionicLoading,$cordovaToast,localStorageService) {
    $scope.value = true;
    $scope.Frequently = true; 


    $scope.backtodashboard = function(){
       $state.go('mainapp.dashboard');
    };

    $scope.VoterListCategory = function(){ 
      $state.go('main.voterlistCategory');
    }; 

    $scope.BoothManagement = function(){
    	$state.go('main.booth-management');
    };

    $scope.VoterSurvey = function(){
    	$state.go('main.voter-survey');
    };

    $scope.AboutUs = function(){
        $state.go('main.about');

    };

    $scope.Setting = function(){
     $state.go('main.setting');
    };
    $scope.Slip = function(){
     $state.go('main.slip-setting');
    };



    $scope.NamewiseList = function(){
      $state.go('main.namewiselist');
    };

    
      $scope.loginPage = function(cId) { 
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

 
    var date = new Date();
    $scope.FromDate = date.getDate() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getFullYear()).slice(-2);
    
     $scope.DatePicker = function(){
            var options = {
            date: new Date(),
            mode: 'date', // or 'time'
            minDate: new Date() - 10000,
            allowOldDates: true,
            allowFutureDates: false,
            doneButtonLabel: 'DONE',
            doneButtonColor: '#F2F3F4',
            cancelButtonLabel: 'CANCEL',
            cancelButtonColor: '#000000'
          };

          document.addEventListener("deviceready", function () {

            $cordovaDatePicker.show(options).then(function(date){
                //alert(date);
                var appDate = $filter('date')(date, "dd-MM-yy");
                $scope.FromDate = appDate;
                
                
            });

          }, false);
    };

       
});

