// JavaScript source code
app.controller('usersController', function ($scope, $routeParams, $location, usersFactory) {
    usersFactory.getUser(function (data) {
        
        $scope.currentUser = data[0];
        console.log($scope.currentUser)
    })

    $scope.login = function () {
        if (!$scope.user.name) {
            alert('User name is required.');
        }
        else {
            usersFactory.login($scope.user, function (data) {
                $location.url('/success');
            })
        }
    }

    $scope.logout = function () {
        usersFactory.destroy(function(){
            $location.url('/');
        });
    }
});