// JavaScript source code
app.factory('mainFactory', function ($http) {
    var factory = {};
    var current_user = [];
    var score;

    //Load firsts
    factory.login = function (user, callback) {
        $http.post('/users/', user)
            .then(function (response) {
                current_user.push(response.data);
                callback();
            })
    };

    factory.getStats = function (callback) {
        $http.get('/stats')
            .then(function (response) {
                callback(response);
            })
    };

    factory.getQ = function (callback) {
        $http.get('/getQ')
            .then(function (response) {
                callback(response.data);
            });
    };

    factory.getScore = function (callback) {
        callback(score);
    }

    factory.clearScore = function () {
        score = undefined;
    }

    //called methods
    factory.getUser = function (callback) {
        callback(current_user);
    }

    factory.destroy = function (callback) {
        current_user = [];
        callback();
    }

    factory.newQ = function (id, qstn, callback) {
        $http.post('/newQ/' + id, qstn)
            .then(function (response) {
                callback();
            })
    }

    factory.keepScore = function (scr, callback) {
        score = scr;
        console.log(scr)
        var params = { 'u_id': current_user[0]._id, 'scr': score };
        $http.post('/score', params)
            .then(function (response) {
                callback();
            });
    }
    return factory;
});