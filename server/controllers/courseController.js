const router = require('express').Router();
const { isUser } = require('../middlewares/guards');
const { getAllCourses, getCourseById } = require('../services/courseServices');



router.get('/', async(req, res) => {
    try {
        const courses = await getAllCourses();
        res.status(200).send(courses);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
});

router.post('/create', isUser(), async(req, res) => {
    const courseData = {
        language: req.body.language,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        startsOn: req.body.startsOn,
        createdBy: [],
        owner: req.userData._id
    }

    try {
        const course = await req.storage.createCourse(courseData);
        res.status(201).send(course);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
});

router.get('/details/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const course = await getCourseById(id);
        res.status(201).send(course);

    } catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
});


router.get('/edit/:id', isUser(), async(req, res) => {

    try {
        const course = await req.storage.getCourseById(req.params.id);

        if (req.userData._id != course.owner) {
            throw new Error('Cannot edit course you haven\'t created')
        }
        res.status(201).send(course);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
});

router.post('/edit/:id', isUser(), async(req, res) => {
    try {
        const course = await req.storage.getCourseById(req.params.id);

        if (req.userData._id != course.owner) {
            throw new Error('Cannot edit course you haven\'t created')
        }

        const editedCourse = await req.storage.editCourse(req.params.id, req.body);

        res.status(201).send(editedCourse);

    } catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
});

module.exports = router;
