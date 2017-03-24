// JavaScript source code
var app = angular.module('app', ['ngRoute', 'ngMessages'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl:'partials/login.html'
            })
            .when('/success',
            {
                templateUrl:'partials/success.html'
            })
    });