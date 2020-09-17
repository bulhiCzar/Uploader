const { Schema, model, Types } = require('mongoose')


const schema = new Schema({
    master: {type: String, required: true},
    link: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    data: {type: Date, default: Date.now},
    looks: {type: Number, default: 0},
    md5: {type: String, required: true, unique: true},
    owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('File', schema)