var myApp = angular.module('myApp', []);

// myApp.config(function(){
    
// });
// myApp.runs(function(){

// });
myApp.controller("MyAppController", ['$scope', function($scope){

    $scope.message = "Napaka Angassss";

    $scope.removePerson = function(ninja){
        var removePerson = $scope.persons.indexOf(ninja);
        $scope.persons.splice(removePerson, 1);
    }
    // $scope.names=['Juan', 'Helen','Mark'];
    $scope.persons=[
        {
            name: 'Joemar',
            rate: 100,
            available: true
        },
        {
            name: 'Helen',
            rate: 10000000000,
            available: true
        },
        {
            name: 'Edward',
            rate: 123456,
            available: false
        },
    ];


}]);