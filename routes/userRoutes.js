const express = require('express');
const router = express.Router();
const userController = require('../controller/userControllers')

router.post('/',userController.addUser)
router.post('/login/', userController.authUser)
router.get('/check/:username/', userController.checkUsername)
module.exports = router;

