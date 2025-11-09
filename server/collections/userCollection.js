const mongoose = require('mongoose')
const collectionNames = require('../utility/collectionName.js')
const { default: DatePicker } = require('react-datepicker')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "first name is required"]
    },
    lastName: {
        type: String,
        required: [true, "last name is required"]
    },
    email: {
        type: String,
        required: [true, "email address is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
    },
    role: {
        type: String,
        default: "user" // default is set for user,
    },
    phone: {
        type: Number,
        required: [true, "mobile number is required"],
        unique: true,
    },
    username: {
        type: String,
        required: false,
        unique: true,
    }
   
}, {timestamps: true})


module.exports = mongoose.model(collectionNames.collectionNames.UserCollection, userSchema)

