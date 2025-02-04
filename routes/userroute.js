const express = require('express');
const usermodel = require('../models/user');
const { Signupfnc, Signinfnc } = require('../controllers/usercreation');
const userroute = express.Router()

userroute.get('/signup', Signupfnc).post('/signup', Signupfnc);
userroute.get('/signin', Signinfnc).post('/signin', Signinfnc);

module.exports = userroute