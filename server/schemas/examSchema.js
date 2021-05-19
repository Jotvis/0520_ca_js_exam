const mongoose = require('mongoose')

const Schema = mongoose.Schema

const examSchema = new Schema({
    keyName: {
        type: Number,
        required: true
    },
    keyName2: {
        type: Number,
        required: true
    },
})

const examModel = mongoose.model('examModel', examSchema)

module.exports = examModel