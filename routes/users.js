const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const usersCtrl = require('../controllers/users.js');


router.get('/', usersCtrl.getAllUsers);

router.get('/:id', auth, usersCtrl.getOneUser);

router.delete('/:id', auth, usersCtrl.deleteUser);


module.exports = router;
