const express = require('express');
const usermodel = require('../models/user');
const { postuser, getuser } = require('../servises/usersession');
const { v4:uuidv4 } = require('uuid');
const { get } = require('mongoose');

async function Signupfnc(req, res) {
    const data = req.body
    if(req.method==='POST'){
        await usermodel.create({name:data.name, email:data.email, password:data.password})
    }
    return res.render('signup');
};

async function Signinfnc(req, res) {
    const data = req.body;
    if(req.method==='POST'){
        checkuser = await usermodel.findOne({email:data.email, password:data.password});
        if(checkuser){
            console.log('Login Successfully!');
            sessionid = uuidv4();
            console.log(sessionid);
            postuser(sessionid, checkuser);
            res.cookie('uuid', sessionid);
        }else{
            return res.json({msg:'invalid user credentials!'});
        };
    };


    return res.render('signin');
};

module.exports = {
    Signupfnc,
    Signinfnc,
}