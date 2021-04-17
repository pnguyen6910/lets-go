const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mapSchema = new Schema({
    position: {
        lat: Integer,
        lng: Integer
    },
    popup: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Map = mongoose.model('Map', mapSchema)

module.exports = Drawing