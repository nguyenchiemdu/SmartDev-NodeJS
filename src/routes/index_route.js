const homeRouter = require('./home')
const loginRouter = require('./login')
const apiRouter = require('./API')
const authRouter = require('./auth')
const dashboardRouter = require('./dashboard')
function route(app) {
    app.use('/', homeRouter)
    app.use('/login', loginRouter)
    app.use('/topcategories',apiRouter)
    app.use('/auth',authRouter)
    app.use('/dashboard',dashboardRouter)
    
}

module.exports = route;