const router = require('express').Router();
const { isUser } = require('../middlewares/guards');
const { getAllTeachers, getTeacherById } = require('../services/teacherServices');


//Delete it
router.get('/add', (req, res) => {
    res.render('teacherCreate')
});
//

router.get('/', async(req, res) => {
    try {
        const teachers = await getAllTeachers();
        res.status(200).send(teachers);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
});

router.post('/add', isUser(), async(req, res) => {
    const teacherData = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        phone: req.body.phone,
        birth: req.body.birth,
        info: req.body.info,
        resources: req.body.resources,

    }

    try {
        const teacher = await req.storage.createTeacher(teacherData);
        res.status(201).send(teacher);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
});


router.get('/details/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const teacher = await getTeacherById(id);
        res.status(201).send(teacher);

    } catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
});




module.exports = router;