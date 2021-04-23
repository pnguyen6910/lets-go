const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mapSchema = new Schema({
    position: {
        lat: {
            type: Integer,
        },
        lng: {
            type: Integer,
        }
    },
    popup: {
        type: String,
        required: "Please enter a name and description"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Map = mongoose.model('Map', mapSchema)

module.exports = Map