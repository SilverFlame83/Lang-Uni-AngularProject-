const { Schema, model } = require('mongoose');

const schema = new Schema({
    language: { type: String },
    subject: { type: String },
    text: { type: String },
    starts: { type: String },
    durations: { type: String },
    sessions: { type: String }
});

module.exports = model('Level', schema);