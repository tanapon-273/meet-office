const router = require('express').Router();
const {authenticated} = require('../config/security')

// Account route
router.use('/account', require('./account'))

// Equipment route
router.use('/equipment',authenticated, require('./equipment'))

module.exports = router;