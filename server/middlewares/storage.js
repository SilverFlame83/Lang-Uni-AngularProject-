const teacher = require('../services/teacherServices');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...teacher
    }
    next();
};

