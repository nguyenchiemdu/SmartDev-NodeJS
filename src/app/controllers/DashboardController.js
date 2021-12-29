const Category = require('../models/Category')
const TopCategory = require('../models/TopCategory')
const User = require('../models/User')
const Course = require('../models/Course')
const axios = require('axios').default;
const requestIp = require('request-ip');
const { handle, lazyrouter, listen } = require('express/lib/application')
const jwt = require('jsonwebtoken');
const { json } = require('express/lib/response');

var listCollections = {
  categories: Category,
  top_categories: TopCategory,
  users: User,
  courses: Course,

}
class DashboardController {

  // GET /
  index(req, res, next) {
    var isAdmin = req.cookies.admin
    if (isAdmin) return res.render('dashboard_home', { collectionData: [] })
    return res.redirect('dashboard/login')
  }
  //GET Collection
  async collection(req, res, next) {
    var targetCollection = listCollections[req.params.collection]
    try {
      var data = await targetCollection.find({})
      data = data.map(item => JSON.parse(JSON.stringify(item)))
    } catch (e) {

    }
    res.render('dashboard_collection', { collectionData: data, collectionName: req.params.collection })
  }
  // POST index collection
  async postIndex(req, res, next) {
    var targetCollection = listCollections[req.body.collection]
    try {
      var data = await targetCollection.find({})
      // Chi lay nhung key can thiet
      data = data.map(item => JSON.parse(JSON.stringify(item)))
      res.render('dashboard_home', { collectionData: data, collectionName: req.body.collection })
    } catch (e) {
      console.log(e)
      res.sendStatus(404)
    }

  }

  // GET /login
  login(req, res, next) {
    res.render('dashboard_login', { notification: '' })
  }
  // POST Login
  postLogin(req, res, next) {
    var email = req.body.email
    var password = req.body.password
    if (email == 'admin@gmail.com' & password == 'password') {
      res.cookie("admin", true, {
        httpOnly: true,
        sameSite: "strict",
      })
      return res.redirect('/dashboard')
    }
    return res.render('dashboard_login', { notification: 'invalid email or password' })
  }

  // GET signout
  signout(req, res, next) {
    res.clearCookie('admin')
    res.redirect('/dashboard/login')
  }

  // Edit data in collection => return view
  async editData(req, res, next) {
    try {
      var targetCollection = listCollections[req.params.collection];
      var data = await targetCollection.findOne({ _id: req.params.id })
      data = JSON.parse(JSON.stringify(data))
      res.render('dashboard_edit', { itemData: data, collectionName: req.params.collection, notification: '' })
    }
    catch (e) {
      console.log(e)
      res.json(e)
    }
  }
  // Update change to Database
  async updateChange(req, res, next) {
    var targetCollection = listCollections[req.params.collection]
    try {
      var mongoRespond = await targetCollection.updateOne({ _id: req.body._id }, req.body)
      res.render('dashboard_edit', { itemData: req.body, collectionName: req.params.collection, notification: 'Update change successfully !' })
    } catch (e) {
      console.log(e)
      res.json(e)
    }
  }
  // Delete data to Database 
  async deleteData(req, res, next) {
    var targetCollection = listCollections[req.params.collection]
    try {
      var mongoRespond = await targetCollection.deleteOne({ _id: req.params.id })
      res.redirect('/dashboard/' + req.params.collection)
    }
    catch (e) {
      console.log(e)
      res.json(e)
    }

  }
  // Add data view
  async addDataView(req, res, next) {
    var targetCollection = listCollections[req.params.collection]
    try {
      var data = await targetCollection.findOne()
      data = JSON.parse(JSON.stringify(data))
      for (var key in data) data[key] = ''
      delete data._id
      res.render('dashboard_edit', { itemData: data, collectionName: req.params.collection, notification: '' })
    } catch (e) {
      console.log(e)
      res.json(e)
    }
  }
  async addtoDataBase(req, res, next) {
    var targetCollection = listCollections[req.params.collection]
    try {
      var mongoRespond = await targetCollection.create({ ...req.body })
      res.render('dashboard_edit', { itemData: req.body, collectionName: req.params.collection, notification: 'Create document successfully !' })
    } catch (e) {
      console.log(e)
      res.json(e)
    }
  }
}

module.exports = new DashboardController;