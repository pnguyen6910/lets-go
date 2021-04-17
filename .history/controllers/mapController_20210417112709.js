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
    updateDrawing: function (req, res) {
        const { id } = req.params
        db.Drawing.findByIdAndUpdate(id, req.body, { new: true })
            .then(drawingData => {
                res.json(drawingData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    },
    deleteDrawing: function (req, res) {
        const { id } = req.params
        db.Drawing.findByIdAndDelete(id)
            .then(drawingData => {
                res.json(drawingData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    },
}