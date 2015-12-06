var myApp = angular.module('angularApp', []);

myApp.controller('mainController', ['$scope','$timeout', function($scope,$timeout) {
    
    $scope.name = '';
    
    $scope.$watch('name', function(newValue, oldValue) {        
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);
        
    }); 
    
    $timeout(function() {       
       $scope.name = 'setTimeout';
       console.log('Scope changed by setTimeout!');        
    }, 2000);
    
   /*  setTimeout(function() {
       
        $scope.name = 'setTimeout';
        console.log('Scope changed by setTimeout!');
        
    }, 2000);   */
    

  /*   setTimeout(function() {
           $scope.$apply(function(){
               $scope.name = 'setTimeout';                      
           });
          console.log('Scope changed by setTimeout!');

     }, 2000);*/
  
}]);


