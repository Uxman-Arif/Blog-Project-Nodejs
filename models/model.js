const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    }
}, {timestamps:true});

const blogmodel = mongoose.model('blogs', blogSchema);

module.exports = blogmodel;