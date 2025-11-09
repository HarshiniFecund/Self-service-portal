
const express = require('express')
const User = require('../collections/userCollection')
const {loginUser,signupUser, forgotPassword} = require('../controllers/userController')

// for creating the instance of the route
const router = express.Router()

// login user
router.post('/login', loginUser)
router.post('/signup', signupUser)
router.post('/forgotPassword', forgotPassword)
module.exports = router