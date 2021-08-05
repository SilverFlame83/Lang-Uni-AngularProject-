const teacher = require('../services/teacherServices');

module.exports = () => (req, res, next) => {
    req.storage = {
        ...teacher
    }
    next();
};

// const level = require('../services/levelServices');

// module.exports = () => (req, res, next) => {
//     req.storage = {
//         ...level
//     }
//     next();
// };


// const course = require('../services/courseServices');

// module.exports = () => (req, res, next) => {
//     req.storage = {
//         ...course
//     }
//     next();
// };