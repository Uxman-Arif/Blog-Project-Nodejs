const express = require('express');
const blog = require('../models/model');

function index(req, res) {
    console.log('now here')
    return res.render('index');
};

const addblog = async (req, res) => {
    data = req.body;
    if (!data.name & !data.Description){
        return res.json({msg:'ni a 10 k data kn peyjc...'});
}
    console.log(data);
    return res.render('addblog');
}

module.exports = {
    index,
    addblog,
}