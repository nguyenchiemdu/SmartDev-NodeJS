require('dotenv').config()
const jwt = require('jsonwebtoken')

const verifyUser = (req, res, next) => {
    const accessToken = req.cookies.accessToken

    try {
        const decoded =  jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET)
        return res.redirect('/')
    } catch (e) {
        console.log(e)
        next()
    }

}

module.exports = verifyUser