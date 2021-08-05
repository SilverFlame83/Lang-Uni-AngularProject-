const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        requierd: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    phone: {
        type: String,
        required: true
    },
    birth: {
        type: String,
        required: true
    },
    info: {
        type: String
    },
    resources: {
        any: {}
    }
});

module.exports = model('Teacher', schema);