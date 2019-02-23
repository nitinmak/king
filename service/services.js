angular.module('starter')
    .service('LoginService', function (UtilService) {

        this.postLoginDetails = function($http,$q,mobile,pwd){

            var apiPath = UtilService.serviceBaseLogin() +'login?password='+pwd+'&mobile='+mobile;
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiPath,
                type: JSON
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data)
            {
                deferred.reject("Data Error");
            })
            return deferred.promise;
        }

        
   this.PostUserDetails = function($http,$q,fname,lname,mobile,pwd){

            var apiPath = UtilService.serviceBaseLogin() +'UserRegistartion?fname='+fname+'&lname='+lname+'&mobile='+mobile+'&pwd='+pwd;
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiPath,
                type: JSON
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data)
            {
                deferred.reject("Data Error");
            })
            return deferred.promise;
        }
     
    
 
    

    this.GetvoterList = function($http,$q,mobile,pwd){
     var apiPath = UtilService.serviceBaseLogin() +'getVoterList?mobile='+mobile+'&pwd='+pwd;
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: apiPath,
                type: JSON
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (data)
            {
                deferred.reject("Data Error");
            })
            return deferred.promise;
        }
     
    
  

});
