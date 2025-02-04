const srfmap = new Map()

function postuser(user, id){
    srfmap.set(id, user);
};

function getuser(id){
    return srfmap.get(id);
}

module.exports = {
    postuser,
    getuser,
}