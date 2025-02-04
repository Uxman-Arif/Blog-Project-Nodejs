const { getuser } = require('../servises/usersession');

async function uservalidation(req, res, next) {
    const userid = req.cookies?.uuid;
    if(!userid){
        return res.redirect('/user/signin');
    }

    const checking_user = getuser(userid);
    req.user = checking_user;
    next()

};

module.exports = uservalidation;