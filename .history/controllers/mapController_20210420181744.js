const db = require('../models')

module.exports = {
    createPoint: function (req, res) {
        db.Map.create(req.body)
            .then(drawingData => {
                res.json(drawingData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    },
    getPoints: function (req, res) {
        console.log(this)
        db.Map.find({})
            .sort({ date: -1 })
            .then(points => {
                res.json(points)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    },
    getPoint: function (req, res) {
        const { id } = req.params
        db.Map.findById(id)
            .then(mapData => {
                res.json(mapData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    },
    updatePoint: function (req, res) {
        const { id } = req.params
        db.Map.findByIdAndUpdate(id, req.body, { new: true })
            .then(pointData => {
                res.json(pointData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    },
    deletePoint: function (req, res) {
        const { id } = req.params
        db.Map.findByIdAndDelete(id)
            .then(pointData => {
                res.json(pointData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    },
}