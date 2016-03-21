/**
 * Created by yoavganbar on 26/02/2016.
 */
(function (blogApp){
    blogApp.controller('postController', ['$scope', 'postsReader', '$routeParams' , function ($scope,postsReader, $routeParams) {
        postsReader.then(function (data) {
            $scope.posts = data;
        });
        $scope.pageNumber = $routeParams.pageNumber;
        $scope.searchParam = $routeParams.search;


    }]);
})(angular.module('blogApp'));