// JavaScript source code
app.controller('addController', function ($scope, $routeParams, $location, mainFactory) {
    //Execute on load
    mainFactory.getUser(function (data) {
        $scope.currentUser = data[0];
    })
    //methods
    $scope.logout = function () {
        mainFactory.destroy(function () {
            $location.url('/');
        });
    }

    $scope.subQ = function () {
        mainFactory.newQ($scope.currentUser._id, $scope.new, function () {
            $location.url('/dashboard');
        })
    }
})