const express = require('express')
const ejs = require('ejs')
const path = require('path')
const app = express()
const morgan = require('morgan')
const port = process.env.PORT || 3000


const route = require('./routes/index_route.js')
const db = require('./config/db/index_db');
// Connect to DB
db.connect()
// Static Directory
app.use(express.static(path.join(__dirname, 'public')))
// Template engine
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'resources/views'))
//HTTP logger
app.use(morgan('combined'))

// Route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})