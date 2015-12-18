var myApp = angular.module('angularApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
        .when("/home", {
            templateUrl: "views/home.html",
            controller: "homeController"
        })
        .when("/about", {
            templateUrl: "views/aboutus.html",
            controller: "aboutController"
        })
        .when("/contact", {
            templateUrl: "views/contactus.html",
            controller: "contactController"
        }).
        otherwise({
            redirect: '/home'
        });
    }]);

myApp.controller('homeController', ["$scope",function ($scope) {
    $scope.message="This is home page";
          
}]);

myApp.controller('aboutController', ["$scope",function ($scope) {
   $scope.message="This is about us page";
          
}]);

myApp.controller('contactController', ["$scope",function ($scope) {
   $scope.message="This is contact us page";
          
}]);