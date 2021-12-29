
const dashboardAuthen = (req, res, next) => {
    console.log(req.cookies.admin)
    if (req.cookies.admin) return next()
    return res.sendStatus(401)
}

module.exports = dashboardAuthen