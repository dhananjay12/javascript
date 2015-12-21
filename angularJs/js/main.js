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
  
}]);

myApp.directive("bookResult", function(){

    return{
        templateUrl:'directives/bookResultDirective.html',
        replace:true,
        scope:{
            bookObject: '='
        },
        transclude:true,
        link:function (scope, iElem, iAttrs) {
                               console.log(': post link');
                               console.log(iElem);
        }
     /*  compile: function (tElem, tAttrs) {
                       console.log(': compile');
                       console.log(tElem);
                       return {
                           pre: function (scope, iElem, iAttrs) {
                               console.log(': pre link');
                               console.log(iElem);
                           },
                           post: function (scope, iElem, iAttrs) {
                               console.log(': post link');
                               console.log(iElem);
                           }
                       }
     }*/
    }

});
