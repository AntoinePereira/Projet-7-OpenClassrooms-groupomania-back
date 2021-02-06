const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const commentsCtrl = require('../controllers/comment.js');


router.get('/:id', commentsCtrl.getOneComment);

router.post('/', commentsCtrl.createComment);

router.put('/:id', commentsCtrl.modifyComment);

router.delete('/:id', commentsCtrl.deleteComment);

router.get('/', commentsCtrl.getAllComments);


module.exports = router;
