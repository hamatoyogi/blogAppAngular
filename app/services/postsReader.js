/**
 * Created by yoavganbar on 26/02/2016.
 */
(function(blogApp) {
    blogApp.service('postsReader', ['$http','$q', function ($http) {

        var request = $http({method:'Get', url:'/getdata'}).then(function (data) {
            return data.data.posts;
        });
        return request;
    }]);
}(angular.module('blogApp')));