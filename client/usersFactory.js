// JavaScript source code
app.factory('usersFactory', function ($http) {
    var factory = {};
    var current_user = [];

    factory.login = function (data, callback) {
        $http.post('/users/', data)
            .then(function (response) {
                current_user.push(response.data.user);
                callback(current_user);
            })
    };

    factory.getUser = function (callback) {
        callback(current_user);
    }

    factory.destroy = function (callback) {
        current_user = [];
        callback();
    }

    return factory;
});