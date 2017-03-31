// JavaScript source code
app.controller('mainController', function ($scope, $routeParams, $location, mainFactory) {
    //Execute on load
    $scope.Math = window.Math;
    var first_load = function () {
        mainFactory.getUser(function (data) {
            $scope.currentUser = data[0];
        })

        mainFactory.getStats(function (data) {
            $scope.players = data.data;
        });

        mainFactory.getQ(function (questions) {
            $scope.questions = questions;
        });

        mainFactory.getScore(function (score) {
            if (score != undefined) {
                $scope.score = score;
            }
        });
    }

    first_load();

    //methods
    $scope.play = function(){
        if ($scope.questions.length < 3) {
            $scope.errMsg = 'You need at least three questions to play';
            first_load();
        }
        else {
            $scope.errMsg = undefined;
            $location.url('/play');
        }
    };

    $scope.logout = function () {
        mainFactory.destroy(function () {
            $location.url('/');
        });
    };
});