const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { TOKEN_SECRET, COOKIE_NAME } = require('../config/config');
const userService = require('../services/userServices');

module.exports = () => (req, res, next) => {

    if (parseToken(req, res)) {
        req.auth = {
            async register(username, password) {
                const token = await register(username, password);
                res.cookie(COOKIE_NAME, token);
            },
            async login(username, password) {
                const token = await login(username, password);
                res.cookie(COOKIE_NAME, token);
            },
            logout() {
                res.clearCookie(COOKIE_NAME);
                //res.status(204).send({ message: 'Logged out' });
            }
        };
        next();
    }
};


async function register(username, password) {
    const existing = await userService.getUserByUsername(username);

    if (existing) {
        throw new Error('Username is taken!')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createUser(username, hashedPassword);

    return generateToken(user);
}

async function login(username, password) {
    const user = await userService.getUserByUsername(username);

    if (!user) {
        throw new Error('No such user');
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!hasMatch) {
        throw new Error('Invalid username or password');
    }

    return generateToken(user);
}


function generateToken(userData) {
    return jwt.sign({
        _id: userData._id,
        username: userData.username
    }, TOKEN_SECRET);
}


function parseToken(req, res) {
    const token = req.cookies[COOKIE_NAME];
    if (token) {
        try {
            const userData = jwt.verify(token, TOKEN_SECRET);

            req.userData = userData;
        } catch (err) {
            res.clearCookie(COOKIE_NAME);
            return false;
        }
    }
    return true;
}