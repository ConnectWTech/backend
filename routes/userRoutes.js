const express = require('express');
const router = express.Router();
const userController = require('../controller/userControllers')

router.post('/',userController.addUser)
router.get('/login/:name/:password', userController.authUser)

module.exports = router;

