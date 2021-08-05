const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const hbs = require('express-handlebars');

const authMiddleware = require('../middlewares/auth');
const storageMiddleware = require('../middlewares/storage');

module.exports = (app) => {
    //delete it and delete it from package.json
    app.engine('hbs', hbs({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');
    //

    app.use(cors({
        origin: 'http://localhost:4200',
        credentials: true
    }));
    app.use(express.json());
    app.use(express.static('./static'));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(authMiddleware());
    app.use(storageMiddleware());

    //You should delete it!!!
    app.use((req, res, next) => {
        console.log('>>>', req.method, req.url);
        if (req.userData) {
            console.log('Known user', req.userData.username);
        }
        next();
    })

};