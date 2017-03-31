// JavaScript source code
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');

module.exports = 
 {
     login: function (request, response) {
         
         User.findOne({ user: request.body.name }, function (err, user) {
             if (!user) {
                 var newUser = new User();
                 newUser.user = request.body.name;
                 newUser.save(function (err, user) {
                     if (!user) {
                         response.json(err);
                     }
                     else {
                         response.json(user);
                     }
                 });
             }
             else {
                 response.json(user);
             }
         })
     },

     getStats: function (request, response) {
         User.find({}, function (err, users) {
             if (!users) {
                 response.json('Nothing was returned!')
             }
             else {
                 response.json(users);
             }
         });
     },

     newQ: function (request, response) {
         User.findById(request.params.id, function (err, user) {
             var new_question = new Question();
             new_question.question = request.body.question;
             new_question.answers = [
                 { answer: request.body.c_answer, correct: 1 },
                 { answer: request.body.f_answer1, correct: 0 },
                 { answer: request.body.f_answer2, correct: 0}
             ];
             new_question._user = request.params.id;
             new_question.save(function (err, question) {
                 user.questions.push(new_question);
                 user.save(function (err, user) {
                     if (!err) {
                         response.json(new_question)
                     }
                     else {
                         response.json(err);
                     }
                 });
             });
         });
     },

     getQ: function (request, response) {
         Question.aggregate({ $sample: { size: 3 } }, function (err, questions) {
             if (!err) {
                 response.json(questions);
             }
             else {
                 response.json(err);
             }
         });
     },

     scoreIt: function (request, response) {
         User.findById(request.body.u_id, function (err, user) {
             if (user) {
                 console.log(request.body.scr)
                 user.score = request.body.scr;
                 user.save(function (err, user) {
                     if (err) {
                         response.json(err);
                     }
                     else {
                         response.json(user);
                     }
                 });
             }
         })
     },
 }