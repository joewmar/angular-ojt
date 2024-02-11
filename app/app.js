var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    
    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'MyAppController',
    })
    .when('/persons', {
        templateUrl: 'views/persons.html',
        controller: 'MyAppController',
    }).otherwise({
        redirectTo: '/home',
    });
}]);
// myApp.runs(function(){

// });
myApp.directive('randomNames', [function(){
    return {
        restrict: 'EA',
        scope: {
            names:'=',
            title: '=',
        },
        // template: '<img ng-src="{{persons[random].thumb}}" style="margin: -12px 10px 0 0; float: left; width: 50px;" ng-show="persons[random].thumb" /><h3>{{persons[random].name}}</h3>',
        templateUrl: 'views/random.html',
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 4);
        },
    };
}]);
myApp.controller("MyAppController", ['$scope', '$http' , function($scope, $http){

    $http.get('data/persons.json').then(function(response){
        $scope.persons = response.data;
    });
    $scope.message = "Napaka Angassss";

    $scope.removePerson = function(ninja){
        var removePerson = $scope.persons.indexOf(ninja);
        $scope.persons.splice(removePerson, 1);
    }
    $scope.addPerson = function(){
        $scope.persons.push({
            name: $scope.newperson.name,
            rate: parseInt($scope.newperson.rate),
            available: true,
        });
        $scope.newperson.name = "";
        $scope.newperson.rate = "";
    }

    // $scope.names=['Juan', 'Helen','Mark'];
    // $scope.persons=[
    //     {
    //         name: 'Joemar',
    //         rate: 100,
    //         available: true,
    //         thumb: 'content/img/Joemar.jpg',
    //     },
    //     {
    //         name: 'Helen',
    //         rate: 10000000000,
    //         available: true,
    //         thumb: 'content/img/Helen.jpg',

    //     },
    //     {
    //         name: 'Edward',
    //         rate: 123456,
    //         available: true,
    //         thumb: 'content/img/Edward.jpg',

    //     },
    // ];
    // console.log(angular.toJson($scope.persons));



}]);