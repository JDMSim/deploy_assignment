// JavaScript source code
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    user:
        {
            type: String,
            minlength: 3,
            maxlength: 20,
            required: true,
            unique: true
        },
    score:
        {
            type: Number
        },
    questions: [{
        type: Schema.ObjectId,
        ref: 'Question'
    }]
}, { timestamp: true })

mongoose.model('User', userSchema);