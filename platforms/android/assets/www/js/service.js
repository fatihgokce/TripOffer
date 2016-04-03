angular.module('ionicApp.services', [])
    .factory('treePageService', function ($http, $q) {
        return {
            
            getPathBy: function (food, his, fun, latlng, distance) {
                //(string food,string his,string fun,string latlng)
                var deferred = $q.defer();
                $http.get('http://tripoffer.net/api/values?food=' + food + "&his=" + his + "&fun=" + fun + "&latlng=" + latlng + "&distance=" + distance+"&deviceId="+getDeviceId()).success(deferred.resolve).error(deferred.reject);
                return deferred.promise;
            },
            getPaths: function (latlng) {
                var deferred = $q.defer();
                
             
                $http.get('http://tripoffer.net/api/values?latlng=' + latlng+"&deviceId="+getDeviceId()).success(deferred.resolve).error(deferred.reject);
                return deferred.promise;
            },
            getRoute: function (origin, dest, mode) {
                ///api/values?origin=-20.291825,57.448668&dest=-20.179724,57.613463&sensor=false&mode="DRIVING"
                //walking 
                var deferred = $q.defer();
                $http.get('http://tripoffer.net/api/values?sensor=false&origin=' + origin + "&dest=" + dest + "&mode=" + mode).success(deferred.resolve).error(deferred.reject);
                return deferred.promise;
            }

        };
    });
function getDeviceId(){
var di= "";
if(typeof(app)!='undefined'){
    di=app.deviceId;
} 
return di;
}