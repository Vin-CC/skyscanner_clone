exports.veryifToken = function(req, res, next) {
    let token = req.headers['authorization'];

    if(typeof token !== 'undefined') {
        req.token = token;
        next();
    } else {
        res.sendStatus(403);
    }
};
