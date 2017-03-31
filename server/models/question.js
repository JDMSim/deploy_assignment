// JavaScript source code
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    question: {
        type: String,
        minlength: 10,
        required: true
    },
    answers: [{
        answer: String,
        correct: Boolean
    }],
    _user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

mongoose.model('Question', questionSchema);