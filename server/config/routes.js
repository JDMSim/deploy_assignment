// JavaScript source code
var users = require('./../controllers/mainServerController.js')

module.exports = function(app){
    app.post('/users/', function (request, response) {        
        users.login(request, response);
    });
    app.get('/stats/', function (request, response) {
        users.getStats(request, response);
    });
    app.post('/newQ/:id', function (request, response) {
        users.newQ(request, response);
    });
    app.get('/getQ/', function (request, response) {
        users.getQ(request, response);
    });
    app.post('/score', function (request, response) {
        console.log(request.body.scr, 'yo')
        users.scoreIt(request, response);
    });
}