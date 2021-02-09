const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const postsCtrl = require('../controllers/post.js');



router.get('/', postsCtrl.getAllPosts);

router.get('/:id', auth, postsCtrl.getOnePost);

router.post('/', auth, postsCtrl.createPost);

router.put('/:id', auth, postsCtrl.modifyPost);

router.delete('/:id', auth, postsCtrl.deletePost);



module.exports = router;
