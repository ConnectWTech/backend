const express = require('express');
const router = express.Router();
const profileController = require('../controller/profilesControllers');

router.post('/',profileController.addProfile)
router.get('/:id', profileController.getProfileInfo)
router.put('/update', profileController.updateProfile)

module.exports = router;
