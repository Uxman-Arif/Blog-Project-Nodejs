const { getuser } = require('../servises/usersession');

async function uservalidation(req, res, next) {
    const userid = req.cookies?.uuid;
    console.log(userid)
    if(!userid){
        console.log('not')
        return res.redirect('/user/login');
    }

    const checking_user = getuser(userid);
    console.log(checking_user)
    next()

};

module.exports = uservalidation;