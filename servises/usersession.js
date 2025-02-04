const srfmap = new Map();
const jwt = require('jsonwebtoken');
const secret_key = 'sanabasheer@thexmn';

function postuser(id, user){
    srfmap.set(id, user);
    const payload = {
        id,
        ...user,
    }
    return jwt.sign(payload, secret_key);
};

function getuser(id){
    return srfmap.get(id);
};

module.exports = {
    postuser,
    getuser,
};