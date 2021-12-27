const homeRouter = require('./home')
const loginRouter = require('./login')
const apiRouter = require('./API')
const authController = require('./auth')
function route(app) {
    app.use('/', homeRouter)
    app.use('/login', loginRouter)
    app.use('/topcategories',apiRouter)
    app.use('/auth',authController)
}

module.exports = route;