const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const postsCtrl = require('../controllers/post.js');



router.get('/', postsCtrl.getAllPosts);

router.get('/:id', postsCtrl.getOnePost);

router.post('/', postsCtrl.createPost);

router.put('/:id', postsCtrl.modifyPost);

router.delete('/:id', postsCtrl.deletePost);



module.exports = router;
