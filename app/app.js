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
            .when('/post/:id*', {
                templateUrl: 'app/posts/templates/fullPosts.html',
                controller: 'fullPostCtrl',
                resolve: {
                    //fullPost: function ($http, postsReader, $location) {
                    //    return postsReader
                    //        .then(function(posts){
                    //        var posts = posts,
                    //            postPath,
                    //            postName,
                    //            postUrl,
                    //            id = $location.path().slice($location.path().lastIndexOf('/') + 1 );
                    //            console.log(id)
                    //
                    //        for (var i = 0; i < posts.length; i++) {
                    //            console.log(posts[i]);
                    //            postPath = posts[i].htmlPath;
                    //            postName = postPath.slice(postPath.lastIndexOf('/') + 1 );
                    //            if (id === postName) {
                    //                postUrl = postName;
                    //            }
                    //
                    //        }
                    //            console.log('id: ', id, ' postUrl: ', postUrl );
                    //
                    //        return $http.get(postUrl).then(function(promise) {
                    //            return promise.data.post;
                    //        });
                    //    })
                    //
                    //
                    //}
                }
            });
            //.when('/:search', {
            //    templateUrl: 'app/posts/templates/posts.html',
            //    controller: 'searchController'
            //})
            //.otherwise({
            //    redirectTo: '/'
            //});

    });


}(angular));
