// JavaScript source code
app.controller('loginController', function ($scope, $location, $routeParams, mainFactory) {
    $scope.login = function () {
        mainFactory.login($scope.user, function () {
            $location.url('/dashboard');

            mainFactory.clearScore();
        })
    }
})