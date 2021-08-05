const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(config.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection;

        db.on('error', (err) => {
            console.error('connection error: ' + err.message);
            reject(err);
        });
        db.once('open', () => {
            console.log('Database is ready!');
            resolve();
        });
    });
}