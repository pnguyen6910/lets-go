const db = require('../models')

module.exports = {
    createDrawing: function (req, res) {
        db.Drawing.create(req.body)
            .then(drawingData => {
                res.json(drawingData)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    },
    getDrawings: function (req, res) {
        db.Drawing.find({})
            .sort({ date: -1 })
            .then(drawings => {
                res.json(drawings)
            })
            .catch(err => {
                console.log(err)
                res.status(500).send()
            })
    },
    getDrawing: function (req, res) {
        const { id } = req.params
        db.Drawing.findById(id)
            .then(drawingData => {
                res.json(drawingData)
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