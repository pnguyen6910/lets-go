const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mapPoints");

const pointsSeed = [
    {
        position: {
            lat: 44.128151,
            lng: -103.215202,
            zoom: 13
        },
        popup:
            "Soldier Field <br /> The Chicago Bears play here."
    },
    {
        position: {
            lat: 41.879084073159994,
            lng: -87.63592563158475,
            zoom: 13
        },
        popup:
            "Willis Tower <br /> We all really know it's the Sears Tower!"
    },
    {
        position: {
            lat: 41.8796,
            lng: -87.6237,
            zoom: 13
        },
        popup:
            "Art Institue of Chicago <br /> "
    },
    {
        position: {
            lat: 41.8827,
            lng: -87.6233,
            zoom: 13
        },
        popup:
            ""
    },
    {
        position: {
            lat: 41.8919,
            lng: -87.6051,
            zoom: 13
        },
        popup:
            ""
    },
    {
        position: {
            lat: 41.8380992726567,
            lng: -87.65110138119557,
            zoom: 13
        },
        popup:
            ""
    },
    {
        position: {
            lat: 41.9663,
            lng: -87.6372,
            zoom: 13
        },
        popup:
            ""
    },
    {
        position: {
            lat: 41.9484,
            lng: -87.6553,
            zoom: 13
        },
        popup:
            ""
    },
    {
        position: {
            lat: 41.922248064306004,
            lng: -87.63356184754218,
            zoom: 13
        },
        popup:
            ""
    },
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