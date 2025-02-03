const express = require('express');
const multer = require('multer');
const blog = require('../models/model');

// For Media
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });


async function index(req, res) {
    const blogs = await blog.find({});
    return res.render('index', {blogs:blogs});
};

const addblog = async (req, res) => {
    data = req.body;
    if (req.method==='POST'){
        if (!data.name & !data.Description){
            return res.json({msg:'ni a 10 k data kn peyjc...'});
        }else{
            await blog.create({title:data.title, description:data.Description, imageurl: `/uploads/${req.file.filename}`})
        }
    }
    return res.render('addblog');
}

async function blogdetail(req, res) {
    const blogs = await blog.findOne({title:req.params.id});
    console.log(blogs)
    return res.render('blogdetail', {blog:blogs});
};

module.exports = {
    index,
    addblog,
    upload,
    blogdetail,
}