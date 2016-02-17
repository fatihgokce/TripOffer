angular.module('ionicApp.services', [])
.factory('treePageService', function ($http, $q) {
    return {
        getPathBy:function(food,his,fun,latlng,distance){
            //(string food,string his,string fun,string latlng)
               var deferred = $q.defer();          
            $http.get('http://tripoffer.net/api/values?food='+food+"&his="+his+"&fun="+fun+"&latlng="+latlng+"&distance="+distance).success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        },
        getPaths: function (latlng) {
            var deferred = $q.defer();          
            $http.get('http://tripoffer.net/api/values?latlng='+latlng).success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        }
    };
});