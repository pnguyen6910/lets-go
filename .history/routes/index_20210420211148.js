const router = require('express').Router()
const mapController = require('../controllers/mapController')
const userController = require('../controllers/userController')

// home route
router.route('/api/maps')
    .get(mapController.getPoints)

router.route('/api/maps')
    .post(mapController.createPoint)

router.route('/api/maps')
    .delete(mapController.deletePoint)

module.exports = router