const express = require('express');
const router = express.Router();
const commentControllers = require('../controller/commentsControllers');

router.post('/',commentControllers.addComment)
router.delete('/:id', commentControllers.deleteComments)
router.put('/:addOrSubtract/:id', commentControllers.updateLike)
router.get('/:id', commentControllers.getcommentsForPost)
module.exports = router;