// JavaScript source code
app.controller('playController', function ($scope, $routeParams, $location, mainFactory) {
    //Execute on load
    var current_score = 0;

    mainFactory.clearScore();

    mainFactory.getUser(function (data) {
        $scope.currentUser = data[0];
    })

    mainFactory.getQ(function (questions) {
        $scope.questions = questions;
        $scope.answers1 = shuffle($scope.questions[0].answers);
        $scope.answers2 = shuffle($scope.questions[1].answers);
        $scope.answers3 = shuffle($scope.questions[2].answers);
    });

    //Methods
    $scope.submit = function () {
        for (var i = 0; i < $scope.questions[0].answers.length; i++) {
            if ($scope.questions[0].answers[i]._id == $scope.my.answer1) {
                if ($scope.questions[0].answers[i].correct) {
                    current_score++;
                }
            }
        }

        for (var i = 0; i < $scope.questions[1].answers.length; i++) {
            if ($scope.questions[1].answers[i]._id == $scope.my.answer2) {
                if ($scope.questions[1].answers[i].correct) {
                    current_score++;
                }
            }
        }

        for (var i = 0; i < $scope.questions[1].answers.length; i++) {
            if ($scope.questions[2].answers[i]._id == $scope.my.answer3) {
                if ($scope.questions[2].answers[i].correct) {
                    current_score++;
                }
            }
        }

        mainFactory.keepScore(current_score, function () {
            $location.url('/dashboard');
        });
    };

    $scope.cancel = function () {
        mainFactory.clearScore();
        $location.url('/dashboard')
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
})