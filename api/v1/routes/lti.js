const express = require('express');

const LTIController = require('../controllers/lti');
// const isAuthenticated = require('../../../middlewares/is-authenticated');

const router = express.Router();

router.get('/', (req, res) => res.send('LTI Tool Provide!'));
router.post('/lti/bookshelf', LTIController.verifyLaunchRequest);

module.exports = router;
