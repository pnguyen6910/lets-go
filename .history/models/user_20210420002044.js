const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: 'A username is required'
    },
    points: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Map'
        }
    ]
})

const User = mongoose.model('User', userSchema)
module.exports = User