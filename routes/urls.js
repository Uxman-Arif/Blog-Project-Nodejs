const express = require('express');
const {index, addblog} = require('../controllers/view');
const routes = express.Router()

routes.get('/', index)
routes.get('/add', addblog).post('/add', addblog)

module.exports = routes