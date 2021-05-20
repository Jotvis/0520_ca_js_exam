const mongoose = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

const examModel = mongoose.model('examModel', examSchema)

module.exports = examModel