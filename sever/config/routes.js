// JavaScript source code
var users = require('./../controllers/userServerController.js')

module.exports = function(app){
    app.post('/users/', function (request, response) {        
        users.login(request, response);
    });
}