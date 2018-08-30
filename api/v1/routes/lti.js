const express = require('express');

const LTIController = require('../controllers/lti');
// const isAuthenticated = require('../../../middlewares/is-authenticated');

const router = express.Router();

router.post('/lti/bookshelf', LTIController.verifyLaunchRequest);

module.exports = router;
