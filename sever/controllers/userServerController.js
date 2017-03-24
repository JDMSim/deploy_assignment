// JavaScript source code
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = 
 {
     login: function (request, response) {
         
         User.findOne({ user: request.body.name }, function (err, data) {
             if (!data) {
                 var userInnst = new User();
                 userInnst.user = request.body.name;
                 userInnst.save();
                 console.log(data);

                 response.json(userInnst);
             }
             else {
                 response.json(data);
             }
         })
     },
 }