var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'MyAppController',
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController',
    })
    .when('/contact-success', {
        templateUrl: 'views/contact-success.html',
        controller: 'ContactController',
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
// Custom directive
myApp.directive('randomNames', [function(){
    return {
        restrict: 'EA',
        scope: {
            names:'=',
            title: '=',
        },
        // template: '<img ng-src="{{persons[random].thumb}}" style="margin: -12px 10px 0 0; float: left; width: 50px;" ng-show="persons[random].thumb" /><h3>{{persons[random].name}}</h3>',
        templateUrl: 'views/random.html',
        transclude: true,
        replace: true,
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 4);
        },
    };
}]);

// Custom Controller
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

    $scope.removeAll = function(){
        $scope.persons = [];
    }


}]);

myApp.controller("ContactController", ['$scope', '$location', function($scope, $location){
    $scope.sendMessage = function(){
        $location.path('contact-success');
    }
}]);