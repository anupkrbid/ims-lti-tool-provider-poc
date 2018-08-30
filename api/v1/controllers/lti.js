lti = require('../../../lti/ims-lti');

exports.verifyLaunchRequest = (req, res, next) => {
  res.status(200).json({
    status: true,
    message: 'Verifying..',
    body: req.body,
    package: lti
  });
  // const newError = new Error('Invalid Credentials!');
  // newError.status = 401;
  // next(newError);
};
