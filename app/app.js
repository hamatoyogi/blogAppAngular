(function (angular) {
    "use strict";
	var blogApp = angular.module('blogApp', ['ngRoute']);

    blogApp.factory('postsReader', ['$http','$q', function ($http,$q) {
        var deferred = $q.defer();
        $http({method:'Get', url:'./data/posts.json'}).then(function (data) {
            deferred.resolve(data.data.posts);
        });

        return deferred.promise;
        //postsList.then(function (posts) {
        //    var allPosts = posts.data.posts;
        //    console.log(allPosts);
        //
        //});
    }]);

    blogApp.controller('postController', ['$scope', 'postsReader',function ($scope,postsReader) {
        postsReader.then(function (data) {
            $scope.posts = data;
            $scope.template_url = './templates/postForIndex.html';
        })

    }]);

    blogApp.config(function($routeProvider) {
        $routeProvider
            .when('/:postId', {
                templateUrl: 'book.html',
                controller: 'BookController',
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })
            .when('/Book/:bookId/ch/:chapterId', {
                templateUrl: 'chapter.html',
                controller: 'ChapterController'
            });
    });
    //blogApp.config(function ($routerProvider) {
    //    $routerProvider
    //        .when('/', {
    //            redirectTo:'/posts'
    //        })
    //})

}(angular));
