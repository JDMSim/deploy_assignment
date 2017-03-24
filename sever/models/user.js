// JavaScript source code
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    user:
        {
            type: String,
            minlength: 3,
            maxlength: 20,
            required: true,
            unique: true
        }
}, { timestamp: true })

mongoose.model('User', userSchema);