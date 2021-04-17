const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mapSchema = new Schema({
    title: {
        type: String,
        required: 'A title is required'
    },
    body: String,
    date: {
        type: Date,
        default: Date.now()
    },
    drawing: {
        type: String,
        required: 'A drawing is required',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Drawing = mongoose.model('Drawing', drawingSchema)

module.exports = Drawing