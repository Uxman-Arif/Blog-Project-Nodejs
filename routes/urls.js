const express = require('express');
const {index, addblog, upload, blogdetail} = require('../controllers/view');
const routes = express.Router();

routes.get('/', index);
routes.get('/add', addblog).post('/add', upload.single('image'), addblog);
routes.get('/:id', blogdetail);

module.exports = routes;