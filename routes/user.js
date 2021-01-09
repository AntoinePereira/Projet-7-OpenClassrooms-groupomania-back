const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user')


router.get('/', userCtrl.getAllUsers);
router.get('/testsignup', userCtrl.signup);


module.exports = router;

