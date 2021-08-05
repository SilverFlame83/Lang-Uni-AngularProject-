const authController = require('../controllers/authController');
const courseController = require('../controllers/courseController');
const levelController = require('../controllers/levelController');
const teacherController = require('../controllers/teacherController');

module.exports = (app) => {
    app.use('/api', authController);
    app.use('/courses', courseController);
    app.use('/levels', levelController);
    app.use('/teachers', teacherController);
}