const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    // date:{
    //     type:Data,
    //     default:Date.now
    // },


})
module.exports = mongoose.model('signUpTemplate',signUpTemplate)