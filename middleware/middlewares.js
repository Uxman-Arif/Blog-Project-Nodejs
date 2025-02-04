const { getuser } = require('../servises/usersession');

async function uservalidation(req, res, next) {
    // const userid = req.cookies?.token;
    const userid = req.headers['authorization'];
    if(!userid){
        return res.redirect('/user/signin');
    }
    const token = userid.split('Bearer ')[1];
    
    const checking_user = getuser(token);
    req.user = checking_user;
    next()

};

module.exports = uservalidation;