// MODULE
var myApp = angular.module('angularApp', []);

// CONTROLLERS
myApp.controller('mainController', ["$scope","$log", function ($scope,$log) {
    
    $scope.name1="John";
    $log.property1="property1";
          
}]);

myApp.controller('secondController', ["$scope","$log",function ($scope,$log) {
    
    $scope.name2="Jane";
    $log.property2="property2";
    $log.log("Scope==>"+$scope.name1+"    "+$scope.name2);
    $log.log("Log==>"+$log.property1+"    "+$log.property2);
      
}]);
