const { Schema, model } = require('mongoose');

const schema = new Schema({
    username: {
        type: String,
        requierd: true
    },
    hashedPassword: {
        type: String,
        required: true
    }
});

module.exports = model('User', schema);