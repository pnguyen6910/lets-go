const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mapPoints");

const pointsSeed = [
    {
        position: {
            lat: ,
            lng: ,
            zoom: 13
        },
        popup:
            ""
    }
];

const userSeed = {
    username: 'admin',
}

const runSeeder = async () => {
    try {
        await db.User.remove({})
        await db.Map.remove({})
        const result = await db.Map.insertMany(pointsSeed, { raw: true })
        const mapIds = result.map(point => point._id)
        const finalUserData = {
            ...userSeed,
            drawings: drawingIds
        }
        const user = await db.User.create(finalUserData)
        await db.Map.update({}, { user: user._id })
    } catch (err) {
        throw new err
    }
    process.exit()
}

runSeeder()