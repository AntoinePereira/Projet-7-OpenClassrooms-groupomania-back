const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const commentsCtrl = require('../controllers/comment.js');

router.get('/:id', auth, commentsCtrl.getOnePostComments);
router.post('/', auth, commentsCtrl.createComment);
router.put('/:id', auth, commentsCtrl.modifyComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);
router.get('/', commentsCtrl.getAllComments);


module.exports = router;
