const srfmap = new Map();
const jwt = require('jsonwebtoken');
const secret_key = 'sanabasheer@thexmn';

function postuser(user){
    return jwt.sign({
        _id:user._id,
        email: user.email,
    }, secret_key);
};

function getuser(token){
    return jwt.verify(token, secret_key);
};

module.exports = {
    postuser,
    getuser,
};