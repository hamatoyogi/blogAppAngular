(function (angular) {
    "use strict";
	var blogApp = angular.module('blogApp', ['ngRoute']);

    blogApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo:'/posts/1'
            })
            .when('/posts/:pageNumber' , {
                templateUrl: 'app/posts/templates/posts.html',
                controller: 'postController'
            })
            .when('/admin', {
                templateUrl: 'app/admin/templates/admin.html',
                controller: 'adminController'
            })
            .when('/post/:id', {
                templateUrl: 'app/posts/templates/fullPosts.html',
                controller: 'fullPostCtrl'
            })
            //.when('/:search', {
            //    templateUrl: 'app/posts/templates/posts.html',
            //    controller: 'searchController'
            //})
            .otherwise({
                redirectTo: '/'
            });

    });


}(angular));
