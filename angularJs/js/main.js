var myApp = angular.module('angularApp', []);


myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.book={
        title:'Book1',
        description:'Book1 description'
    }
  
}]);

myApp.directive("bookResult", function(){

    return{
        templateUrl:'directives/bookResultDirective.html',
        replace:true
    }

});
