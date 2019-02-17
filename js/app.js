angular.module('starter', ['ionic','LocalStorageModule','ngCordova','pageslide-directive'])

.run(function($ionicPlatform,$state,$ionicPopup,localStorageService,$cordovaToast,$timeout) {
  $ionicPlatform.ready(function() {
    // below code open
    if(localStorageService.get("app_storage")){
          $state.go('mainapp.dashboard'); 
      } 

    
    if(window.Connection) {
      if(navigator.connection.type == Connection.NONE) {
       alert('Sorry, no Internet connectivity detected.Please connect and try agains');
       ionic.Platform.exitApp();
       }
      }

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
    if(ionic.Platform.isAndroid()) {
      StatusBar.backgroundColorByHexString("#0064B1");
    } else {
      StatusBar.styleLightContent();
    }
  }
       
                       

    $ionicPlatform.registerBackButtonAction(function(event) {
            if(true){
       
            if($state.current.name =='main.home'){
                var myPopup = $ionicPopup.show({
                    title: 'Track All',
                    template: "<b>Are you sure you want to exit..?</b>",
                  buttons: [{ 
                      text: 'Exit',
                      type: 'button-positive',
                      onTap: function(e) {     
                          ionic.Platform.exitApp();
                      }
                  }, {
                      text: 'Cancel',
                      type: 'button-balanced',
                      onTap: function(e) {
                        
                      }  
                  }]
              });
           } 
        
         if($state.current.name =='mainapp.dashboard'){
                var myPopup = $ionicPopup.show({
                    title: '<b>Track All</b>',
                    template: "<b>Are you sure you want to exit..?</b>",
                  buttons: [{ 
                      text: 'Exit',
                      type: 'button-assertive',
                      onTap: function(e) {     
                          ionic.Platform.exitApp();
                      }
                  }, {
                      text: 'Cancel',
                      type: 'button-positive',
                      onTap: function(e) {
                        
                      }  
                  }]
              });
           }

        if($state.current.name == 'main.signup'){
              $state.go('main.home');
        }

        if($state.current.name == 'main.voterlist'){
              $state.go('mainapp.dashboard');
        }

        if($state.current.name == 'main.booth-management'){
              $state.go('mainapp.dashboard');
        }

        if($state.current.name == 'main.voter-survey'){
              $state.go('mainapp.dashboard');
        }

        if($state.current.name == 'main.reminder'){
              $state.go('mainapp.dashboard');
        }

        if($state.current.name == 'main.setting'){
              $state.go('mainapp.dashboard');
        }
        
        if($state.current.name == 'main.about'){
              $state.go('mainapp.dashboard');
        }
         if($state.current.name == 'main.slip-setting'){
              $state.go('mainapp.dashboard');
        }

        if($state.current.name == 'main.namewiselist'){
              $state.go('main.voterlistCategory');
        }

        


       
    
    }

  },100);
  


});
   
   

}).config(function ($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/main/home');
    $stateProvider
          .state('main', {
            url: "/main",
            abstract: true,
            templateUrl: "views/main_base.html",
            controller : "MainCtrl"
          })

          .state('mainapp', {
            url: "/mainapp",
            abstract: true,
            templateUrl: "views/mainapp_base.html",
            controller : "MainappCtrl"
          })

          .state('main.home', {
            url: "/home",
            templateUrl: "views/home.html",
            controller : "HomeCtrl"
          })

          .state('main.signup', {
            url: "/signup",
            templateUrl: "views/signup.html",
            controller : "HomeCtrl"
          })

          .state('mainapp.dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            controller : "DashboardCtrl"
          })

          
          .state('main.voterlistCategory', {
            url: "/voterlistCategory",
            templateUrl: "views/votarlistBycategory.html",
            controller : "DashboardCtrl"
          })

          .state('main.booth-management', {
            url: "/booth-management",
            templateUrl: "views/booth-management.html",
            controller : "BoothMng"
          })

          .state('main.voter-survey', {
            url: "/voter-survey",
            templateUrl: "views/voter-survey.html",
            controller : "DashboardCtrl"
          })

          .state('main.reminder', {
            url: "/reminder",
            templateUrl: "views/reminder.html",
            controller : "ReminderCtrl"
          })

           .state('main.setting', {
            url: "/setting",
            templateUrl: "views/setting.html",
            controller : "ReportCtrl"
          })

           .state('main.about', {
            url: "/about",
            templateUrl: "views/about.html",
            controller : "AboutCtrl"
          })

           .state('main.slip-setting', {
            url: "/slip-setting",
            templateUrl: "views/slip-setting.html",
            controller : "SubscriptionCtrl"
          })

            .state('main.namewiselist', {
            url: "/namewiselist",
            templateUrl: "views/namewiselist.html",
            controller : "NameWiseList"
          })

          

});
