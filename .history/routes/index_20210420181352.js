// const mapRoutes = require('./map')
// const router = require('express').Router()

// router.use('/api')

const router = require('express').Router()
const mapController = require('../controllers/mapController')
const userController = require('../controllers/userController')

// home route
router.route('/api/maps')
    .get(mapController.getPoints)
// home code here

module.exports = router