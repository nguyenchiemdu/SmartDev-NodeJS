const express = require('express')
const router = express.Router()

const authController = require('../app/controllers/AuthController.js')

router.post('/login', authController.login)
router.get('/signout',authController.signout)

module.exports = router