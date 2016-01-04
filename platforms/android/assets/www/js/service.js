applicationModule
.factory('treePageService', function ($http, $q) {
    return {
        getPaths: function (latlng) {
            var deferred = $q.defer();          
            $http.get('http://tripoffer.net/api/values?latlng='+latlng).success(deferred.resolve).error(deferred.reject);
           // $http.get({ url: "http://localhost:52582/api/values", method: "get", params: { "latlng": "40.704079,-74.010204" } }).success(deferred.resolve).error(deferred.reject);
            return deferred.promise;
        }
    };
});