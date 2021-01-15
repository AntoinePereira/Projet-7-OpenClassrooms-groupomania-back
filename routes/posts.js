const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const postsCtrl = require('../controllers/post.js');



router.get('/', postsCtrl.getAllPosts);

//router.get('/:id', postsCtrl.getOnePost);

router.post('/', postsCtrl.createPost);

//router.put('/:id', auth, multer, postsCtrl.modifyPost);

//router.delete('/:id', auth, postsCtrl.deletePost);



module.exports = router;