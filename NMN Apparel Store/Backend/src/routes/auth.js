const express = require('express');
const { signout } = require('../../../Frontend/admin-app/src/actions');
const { requireSignin } = require('../common-middleware');
const { signup, signin } = require('../controller/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const router = express.Router();


router.post('/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/signin', validateSigninRequest, isRequestValidated, signin);
//router.post('/signout', requireSignin, signout)


router.post('/profile', requireSignin, (req, res) => {
    res.status(200).json({ user: 'profile' })
});

module.exports = router;