/**
 * Created by yoavganbar on 04/03/2016.
 */
(function (blogApp){
    blogApp.controller('fullPostCtrl', ['postReader','$scope', '$routeParams', function(postReader, $scope, $routeParams) {
        console.log($routeParams);
        postReader.then(function(data){
            $scope.posts = data.data.posts;
            for (var i = 0; i < data.data.posts.length; i++) {
                console.log(data.data.posts[i]);
                if(data.data.posts[i].urlPath == $routeParams.id) {
                    $scope.post = data.data.posts[i];
                }
            };
        });
    }]);
})(angular.module('blogApp'));