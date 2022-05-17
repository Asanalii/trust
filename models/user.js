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
    userName: {
        type: String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        }
});

let UserModel = new mongoose.model('User',schema);

module.exports = UserModel;