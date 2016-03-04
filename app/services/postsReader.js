/**
 * Created by yoavganbar on 26/02/2016.
 */
(function(blogApp) {
    blogApp.factory('postsReader', ['$http','$q', function ($http,$q) {
        var deferred = $q.defer();
        $http({method:'Get', url:'/getdata'}).then(function (data) {
            deferred.resolve(data.data.posts);
        });
        return deferred.promise;
    }]);
}(angular.module('blogApp')));