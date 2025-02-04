const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    imageurl:{
        type:String,
    },
    createdby:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Userauth',
    },
}, {timestamps:true});

const blogmodel = mongoose.model('blogs', blogSchema);

module.exports = blogmodel;