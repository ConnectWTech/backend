const express = require('express');
const router = express.Router();
const postControllers = require('../controller/postControllers');

router.post('/',postControllers.addPosts)
router.get('/',postControllers.getAllPost)
router.get('/:id',postControllers.getAllUserPost)
router.delete('/:id', postControllers.deletePosts)
router.put('/update', postControllers.updatePost)
router.put('/:addOrSubtract/:id', postControllers.updateLike)

module.exports = router;