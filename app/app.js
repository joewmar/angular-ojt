var myApp = angular.module('myApp', [dependencies]);

myApp.config(function(){
    
});
myApp.runs(function(){

});
myApp.controller("MyAppController", ['$scope', function($scope){

    $scope.message = "Napaka Angassss";

    // $scope.names=['Juan', 'Helen','Mark'];
    $scope.persons=[
        {
            name: 'Joemar',
            status: 'Single',
        },
        {
            name: 'Helen',
            status: 'Single',
        },
        {
            name: 'Edward',
            status: 'Married',
        },
    ];


}]);