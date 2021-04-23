const mongoose = require('mongoose')
const Schema = mongoose.Schema

const mapSchema = new Schema({
    position: {
        lat: Schema.Types.Decimal128,
        lng: Schema.Types.Decimal128,
    },
    location: {
        type: String,
        required: "Please enter a name and description"
    },
    description: {
        type: String,
        required: "Please enter a description"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Map = mongoose.model('Map', mapSchema)

module.exports = Map