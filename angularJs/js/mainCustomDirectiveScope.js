var myApp = angular.module('angularApp', []);


myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.books=[
        {
        title:'Book1',
        description:'Book1 description'
        },
        {
        title:'Book2',
        description:'Book2 description'
        }
    ]
    
    $scope.getMoreDetail=function(bookName){
        console.log(bookName);
    }
  
}]);

myApp.directive("bookResult", function(){

    return{
        templateUrl:'directives/bookResultDirectiveScope.html',
        replace:true,
        scope:{
            bookObject: '=',
            getBookDetails:'&'
        }
    }

});
