const { Schema, model } = require('mongoose');

const schema = new Schema({
    level: { type: String },
    price: { type: Number },
    imageUrl: { type: String },
    startsOn: { type: Date, default: Date.now },
    createdBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = model('Course', schema);