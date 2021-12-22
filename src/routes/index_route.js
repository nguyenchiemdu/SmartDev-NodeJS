const homeRouter = require('./home')
const loginRouter = require('./login')
const apiRouter = require('./API')
function route(app) {
    app.use('/', homeRouter)
    app.use('/login', loginRouter)
    app.use('/topcategories',apiRouter)
}

module.exports = route;