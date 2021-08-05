const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const { getAllUsers } = require('../services/userServices')

const { isGuest, isUser } = require('../middlewares/guards');

router.post('/register', isGuest(),

    async(req, res) => {

        try {
            const errors = validationResult(req).array().map(x => x.msg);
            const user = await req.auth.register(req.body.username, req.body.password);

            if (errors.length > 0) {
                throw new Error(errors.join('\n'));
            }
            res.status(200).send(user);
        } catch (err) {
            // console.log(err);
            // res.status(400).send({ message: err.message });
        }

    });

router.get('/users', async(req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).send(users);
    } catch (err) {
        console.log(err.message);
        res.status(400).send({ message: err.message });
    }
});


router.post('/login', isGuest(), async(req, res) => {
    try {
        const errors = validationResult(req).array().map(x => x.msg);
        const user = await req.auth.login(req.body.username, req.body.password);

        if (errors.length > 0) {
            throw new Error(errors.join('\n'));
        }
        res.status(200).send(user);

    } catch (err) {
        console.log(err);
        res.status(400).send({ message: err.message });
    }

});

router.get('/logout', (req, res) => {
    req.auth.logout();
    res.status(204).send({ message: 'Logged out' });
});



module.exports = router;
