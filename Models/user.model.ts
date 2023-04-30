import { Schema } from "mongoose"

const mongoose = require('mongoose')

const schema = mongoose.Schema

const UserSchema = new Schema({
    email : {
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
})

const user = mongoose.model('user',UserSchema);

module.exports = user; 