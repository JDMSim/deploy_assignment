// JavaScript source code
var app = angular.module('app', ['ngRoute', 'ngMessages'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl:'partials/login.html'
            })
            .when('/dashboard',
            {
                templateUrl: 'partials/dashboard.html'
            })
            .when('/new_question',
            {
                templateUrl: 'partials/new_question.html'
            })
            .when('/play',
            {
                templateUrl: '/partials/play.html'
            })
    });