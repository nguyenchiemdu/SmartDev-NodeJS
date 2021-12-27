const express = require('express')
const router = express.Router()
const verifyUser = require('../app/middleware/login.middleware')
const loginController = require('../app/controllers/LoginController')
// /login
router.get('/',verifyUser, loginController.index)


module.exports = router