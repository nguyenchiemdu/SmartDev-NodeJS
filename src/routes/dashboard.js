const express = require('express')
const router = express.Router()
const stringtoint = require('../app/middleware/stringtoint.middleware')
const dashboardController = require('../app/controllers/DashboardController')
const dashboardAuthenMiddleware = require('../app/middleware/dashboard.authen.middleware')
router.get('/', dashboardController.index)
// router.post('/',dashboardController.postIndex)
router.get('/login', dashboardController.login)
router.post('/login', dashboardController.postLogin)
router.get('/signout', dashboardController.signout)
router.get('/:collection', dashboardAuthenMiddleware, dashboardController.collection)
router.get('/:collection/:id/edit', dashboardAuthenMiddleware, dashboardController.editData)
router.post('/:collection/:id/edit', dashboardAuthenMiddleware, stringtoint, dashboardController.updateChange)
router.get('/:collection/:id/delete', dashboardAuthenMiddleware, dashboardController.deleteData)
router.get('/:collection/add', dashboardAuthenMiddleware, dashboardController.addDataView)
router.post('/:collection/add', dashboardAuthenMiddleware, stringtoint, dashboardController.addtoDataBase)



module.exports = router