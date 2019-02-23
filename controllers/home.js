'use strict';

angular.module('starter')
  .controller('HomeCtrl', function ($filter,$cordovaDatePicker,$scope, $window, $state, LoginService, UtilService,$http,$q,$ionicLoading,localStorageService, $ionicModal, $ionicPopup,$cordovaToast) {
              $scope.value = true;           
              $scope.loginPage = function() {
                 $state.go('mainapp.dashboard');
              };
               
              $scope.signup = function(){
                 $state.go('main.signup');
              };
              
          $scope.DatePicker = function(){
            var options = {
            date: new Date(),
            mode: 'date', // or 'time'
            minDate: new Date(),
            allowOldDates: true,
            allowOldYear: true,
            allowFutureDates: true,
            doneButtonLabel: 'DONE',
            doneButtonColor: '#F2F3F4',
            cancelButtonLabel: 'CANCEL',
            cancelButtonColor: '#000000'
          };

          document.addEventListener("deviceready", function () {

            $cordovaDatePicker.show(options).then(function(date){
                //alert(date);
                var appDate = $filter('date')(date, "dd-MM-yyyy");
                $scope.dob = appDate;
                
                
            });

             }, false);
          };

              $scope.UserRegister = function(fname,lname,mobile,pwd){
          
                    $scope.value = false;     
                  	                   
                   LoginService.PostUserDetails($http,$q,fname,lname,mobile,pwd)
                    .then(function(data){
                      //console.log(data);
                      $scope.value = true; 
                      if(data.status === 101){ 
                        
                        $cordovaToast.showLongBottom('          Something went wrong, please try after some time          ').then(function(success) {
                            // success
                          }, function (error) {
                            // error
                          });
                       

                      } else if(data.status === 102){
                             $cordovaToast.showLongBottom('          Phone number already registered, Please login.          ').then(function(success) {
                              // success
                            }, function (error) {
                              // error
                            });
                      } else {
                        
                         localStorageService.set("app_storage",data);
                         $cordovaToast.showLongBottom('          you are registered successfully.          ').then(function(success) {
                            // success
                          }, function (error) {
                            // error
                          });
                                $scope.value = false;
                          //setInterval(function(){ 
                                 $scope.value = true; 
                              $state.go('mainapp.dashboard');
                          //}, 4000); 
                         


                      }
                    },
                    function error(err){
                         $scope.value = true;     
                         $cordovaToast.showLongBottom('          server took too long to respond, please try again.          ').then(function(success) {
                            // success
                          }, function (error) {
                            // error
                          });
                    });

                 
  	           
               };



               $scope.UserLogin = function(mobile,pwd){
          
                 if(typeof mobile === 'undefined'){
                        //  $ionicPopup.alert({
                        //   template: 'Email field is required'
                        // });

                        $cordovaToast.showLongBottom('             Enter Phone Number.          ').then(function(success) {
                            // success
                          }, function (error) {
                            // error
                          });
                  }
                  else if(typeof pwd === 'undefined'){
                        // $ionicPopup.alert({
                        //   template: 'Phone number field is required'
                        // });
                        $cordovaToast.showLongBottom('            Enter Password.             ').then(function(success) {
                            // success
                          }, function (error) {
                            // error
                          });
                  }
                   else{
                    //console.log('length is' +email.length);
                    $scope.value = false;   
                  	
                   LoginService.postLoginDetails($http,$q,mobile,pwd)
                    .then(function(data){
                      $scope.value = true; 
                     
                    if(data.status === 101){
                         //$ionicLoading.show({ template: 'You have entered wrong credentials.', noBackdrop: true, duration: 2500 });
                         $cordovaToast.showLongBottom('You have entered wrong credentials.').then(function(success) {
                            // success
                          }, function (error) {
                            // error
                          });

                    } else {
                        // show toast
                         localStorageService.set("app_storage",data);
                         $state.go('mainapp.dashboard');
                      }
                   },
                    function error(err){
                        $ionicLoading.hide();
                         //  $ionicPopup.alert({
                         //   title: 'Server Error!',
                         //   template: 'server took too long to respond, please try again'
                         // });
                         $cordovaToast.showLongBottom('server took too long to respond, please try again.').then(function(success) {
                            // success
                          }, function (error) {
                            // error
                          });
                         
                    });
                 }
  	         };

       });
