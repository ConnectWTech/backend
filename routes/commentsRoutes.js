const express = require('express');
const router = express.Router();
const commentControllers = require('../controller/commentsControllers');

router.post('/',commentControllers.addComment)
router.get('/:id', commentControllers.deleteComments)
router.put('/:addOrSubtract/:id', commentControllers.updateLike)

module.exports = router;