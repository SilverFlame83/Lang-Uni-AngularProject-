function isUser() {
    return (req, res, next) => {
        if (req.userData) {
            next();
        } else {
            res.redirect('/api/login');
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        if (!req.userData) {
            next();
        } else {
            //Delete it
            res.redirect('/');
        }
    };
}
module.exports = {
    isUser,
    isGuest
}