

angular.module('starter')
  .controller('NameWiseList', function ($ionicModal,$ionicPlatform,$cordovaSQLite,$cordovaProgress,$filter,$cordovaDatePicker,$ionicPopup,$cordovaLocalNotification,$scope,$state,$stateParams,LoginService,UtilService,$http,$q,$ionicLoading,$cordovaToast,localStorageService) {
    $scope.value = true;
    $scope.Frequently = true; 


    $scope.backtodashboard = function(){
       $state.go('main.voterlistCategory');
    };

    

   if(localStorageService.get("dataStored")){
     $ionicLoading.show({
          template: '<p>Data Loading...</p><ion-spinner></ion-spinner>'
    });

   
   $ionicPlatform.ready(function() {
    
   
   var db = null;
   db = window.openDatabase("Kingmaker.db", "1", "voter list", "2000");


      // delete table
      // $cordovaSQLite.execute(db, 'DELETE FROM voterList').then(
      //       function(result) {
                                 
      //           },
      //           function(error) {
      //            }
      //   );

       $cordovaSQLite.execute(db, "CREATE TABLE voterList (id INTEGER, name TEXT, phone INTEGER, email TEXT, address TEXT");
            var mobile = localStorageService.get("app_storage").mobile;
            var pwd = localStorageService.get("app_storage").pwd;

            LoginService.GetvoterList($http,$q,mobile,pwd)
                    .then(function(data){
                     
                    if(data.status === 101){
                        $ionicLoading.hide();
                         
                         $cordovaToast.showLongBottom(' No records found ').then(function(success) {
                            
                          }, function (error) {
                            
                          });

                    } else {
                         localStorageService.set("dataStored",'first time data stored');
                        
                         angular.forEach(data, function(value, key){
                              $cordovaSQLite.execute(db, 'INSERT INTO voterList (id,name,phone,email,address) VALUES (?,?,?)', [value.ID, value.name, value.phone, value.email, value.address])
                              .then(function(result) {
                                  
                              }, function(error) {
                                  
                              })
                         });
                         
                          $ionicLoading.hide();
                      }
                   },
                    function error(err){
                        $ionicLoading.hide();
                         
                         $cordovaToast.showLongBottom('server took too long to respond, please try again.').then(function(success) {
                            
                          }, function (error) {
                            
                          });
                         
                    });



   $cordovaSQLite.execute(db, 'SELECT * FROM voterList')
            .then(
                function(result) {
                  $scope.voterdata = [];
                  if(result.rows.length > 0) {
                  for(var i=0; i<result.rows.length; i++) {
                    $scope.voterdata.push({
                    id: result.rows.item(i).id,
                    name: result.rows.item(i).name,
                    phone: result.rows.item(i).phone
                    });
                }
                      $ionicLoading.hide()
                      $scope.statusMessage = "Message loaded successful, cheers!";
                    }
                },
                function(error) {
                    $ionicLoading.hide()
                    console.log(error);
                    $scope.statusMessage = "Error on loading: " + error.message;

                }
            );
        });



    
     
    }else{

      $ionicLoading.show({
          template: '<p>Downloading data...</p><ion-spinner></ion-spinner>'
    });


   $ionicPlatform.ready(function() {
   

   var db = null;
   db = window.openDatabase("Kingmaker.db", "1", "voter list", "2000");

   $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS voterList (id INTEGER, name TEXT, phone INTEGER, email TEXT, address TEXT");
            var mobile = localStorageService.get("app_storage").mobile;
            var pwd = localStorageService.get("app_storage").pwd;

            LoginService.GetvoterList($http,$q,mobile,pwd)
                    .then(function(data){
                     
                    if(data.status === 101){
                        $ionicLoading.hide();
                         
                         $cordovaToast.showLongBottom(' No records found ').then(function(success) {
                            
                          }, function (error) {
                            
                          });

                    } else {
                         localStorageService.set("dataStored",'first time data stored');
                        
                         angular.forEach(data, function(value, key){
                              $cordovaSQLite.execute(db, 'INSERT INTO voterList (id,name,phone,email,address) VALUES (?,?,?)', [value.ID, value.name, value.phone, value.email, value.address])
                              .then(function(result) {
                                  
                              }, function(error) {
                                  
                              })
                         });
                         
                          $ionicLoading.hide();
                      }
                   },
                    function error(err){
                        $ionicLoading.hide();
                         
                         $cordovaToast.showLongBottom('server took too long to respond, please try again.').then(function(success) {
                            
                          }, function (error) {
                            
                          });
                         
                    });

               
   

      $ionicLoading.show({
          template: '<p>Data loading...</p><ion-spinner></ion-spinner>'
      });
       $cordovaSQLite.execute(db, 'SELECT * FROM voterList')
            .then(
                function(result) {
                  $scope.voterdata = [];
                  if(result.rows.length > 0) {
                  for(var i=0; i<result.rows.length; i++) {
                    $scope.voterdata.push({
                    id: result.rows.item(i).id,
                    name: result.rows.item(i).name,
                    phone: result.rows.item(i).phone
                   
                   });
                }
                      $ionicLoading.hide()
                      $scope.statusMessage = "Message loaded successful, cheers!";
                    }
                },
                function(error) {
                    $ionicLoading.hide()
                    console.log(error);
                    $scope.statusMessage = "Error on loading: " + error.message;

                }
            );

            
       });
     

     }
     
     
   



     $ionicModal.fromTemplateUrl('views/voterdetails.html', {
                scope: $scope,
                animation: 'slide-in-up'
              }).then(function(modal) {
                $scope.ModalB= modal;
              });

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

 });

