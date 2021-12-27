const { redirect } = require('express/lib/response')
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const accessToken = req.cookies.accessToken

    try {
        const decoded =  jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET)
        next()
    } catch (e) {
        console.log(e)
        redirect('/login')
    }
}

module.exports = verifyToken