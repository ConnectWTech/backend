const express = require('express');
const router = express.Router();
const jobApplyControllers = require('../controller/job_appliedControllers');

router.get('/user/:id', jobApplyControllers.usersJobsApplied)
router.get('/job/:id',jobApplyControllers.getAllApplied)
// router.post('/',jobApplyControllers.addApply)
// router.delete('/:id', jobApplyControllers.deleteApply)
// router.put('/update', jobApplyControllers.updateJobResult)

module.exports = router;