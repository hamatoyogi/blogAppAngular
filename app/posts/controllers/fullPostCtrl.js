/**
 * Created by yoavganbar on 04/03/2016.
 */
(function (blogApp){
    blogApp.controller('fullPostCtrl', ['postsReader','$scope', '$routeParams', function(postsReader, $scope, $routeParams) {
        console.log($routeParams);

        $scope.post = $routeParams.id;


            //$scope.posts = postsReader;
            //for (var i = 0; i < $scope.posts.length; i++) {
            //    console.log($scope.posts[i]);
            //    if($scope.posts[i].htmlPath == $routeParams.id) {
            //        $scope.post = $scope.posts[i];
            //    }
            //}




    }]);
})(angular.module('blogApp'));