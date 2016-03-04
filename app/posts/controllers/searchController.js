/**
 * Created by yoavganbar on 01/03/2016.
 */
(function (blogApp){
    blogApp.controller('searchController', ['$scope', '$route' , function ($scope, $route) {
            // Prevent url get request from submit
            $scope.searchAction = function ($event) {
                $event.preventDefault();
                $route.updateParams({search: $scope.searchBar});
                console.log($scope.searchBar);
            };

    }]);
})(angular.module('blogApp'));