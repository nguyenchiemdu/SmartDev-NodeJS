const Category = require('../models/Category')
const TopCategory = require('../models/TopCategory')
const IpAddress = require('../models/IpAddress')
const Course = require('../models/Course')
const axios = require('axios').default;
const requestIp = require('request-ip');
const { handle, lazyrouter, listen } = require('express/lib/application')
const jwt = require('jsonwebtoken')
class HomeController {

  // GET /home
  index(req, res, next) {

    //Get IP address
    // var small = new IpAddress({ ip: req.socket.remoteAddress })
    // small.save((err) => {
    //   if (err) return handleError(err)
    //   console.log('add ip to database cuccessfully')
    // })

    //Call api
    var options = {
      method: 'GET',
      url: 'https://udemy-courses-coupon-code.p.rapidapi.com/api/udemy_course/',
      headers: {
        'x-rapidapi-host': 'udemy-courses-coupon-code.p.rapidapi.com',
        'x-rapidapi-key': '9041e6ef80msh4983053313a3931p14def8jsnf768a6b435ce'
      }
    }
    var callApi = axios.request(options)

    //Check token
    let payload
    try {
      payload = jwt.verify(req.cookies.accessToken, process.env.ACCESS_TOKEN_SECRET)
      console.log(payload)

    }
    catch (e) {
      console.log(e)
      payload = null;
    }
    const email = payload == null ? null : payload.email
    
    // get Data from Database
    Promise.all([Category.find(), TopCategory.find(), Course.find()])
      .then(respond => {
        // console.log(JSON.stringify(respond[2].data))
        res.render('home', { categories: respond[0], topCategories: respond[1], courses: respond[2], email : email });
      })
      .catch(e => next(e))
  }
}

module.exports = new HomeController;