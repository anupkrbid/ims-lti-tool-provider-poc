lti = require('../../../lti/ims-lti');

exports.verifyLaunchRequest = (req, res, next) => {
  const consumer_key = req.body.oauth_consumer_key;
  const consumer_secret = 'secret';
  let signature_method, nonce_store;

  provider = new lti.Provider(
    consumer_key,
    consumer_secret,
    nonce_store,
    signature_method
  );

  provider.valid_request(req, function(err, isValid) {
    res.status(200).json({
      err: err,
      isValid: isValid
    });
  });

  // res.status(200).json({
  //   status: true,
  //   message: 'Verifying..',
  //   body: req.body,
  //   package: lti
  // });

  // const newError = new Error('Invalid Credentials!');
  // newError.status = 401;
  // next(newError);
};
