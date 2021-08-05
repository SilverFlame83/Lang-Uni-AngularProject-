const router = require('express').Router();
const { isUser } = require('../middlewares/guards');
const { getAllLevels, getLevelById } = require('../services/levelServices');


//Delete it
router.get('/add', (req, res) => {
    res.render('levelCreate')
});
//

router.get('/', async(req, res) => {
    try {
        const levels = await getAllLevels();
        res.status(200).send(levels);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
});

router.post('/add', isUser(), async(req, res) => {
    const levelData = {
        language: req.body.language,
        imageUrl: req.body.imageUrl,
        text: req.body.text,
        starts: req.body.starts,
        duration: req.body.duration,
        sessions: req.body.sessions
    }

    try {
        const level = await req.storage.createLevel(levelData);
        res.status(201).send(level);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
});

router.get('/details/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const level = await getLevelById(id);
        res.status(201).send(level);

    } catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
});




module.exports = router;