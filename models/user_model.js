let mongoose = require('mongoose')
let schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    username: {
        type: String,
        required:true,
        unique:true
    }
});

let UserModel = new mongoose.model('User',schema);

module.exports = UserModel;