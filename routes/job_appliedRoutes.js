const express = require('express');
const router = express.Router();
const jobApplyControllers = require('../controller/job_appliedControllers');

router.get('/user/:id', jobApplyControllers.usersJobsApplied)
router.get('/info/:id', jobApplyControllers.jobInfo)
router.get('/job/:id',jobApplyControllers.getAllApplied)
router.post('/',jobApplyControllers.addApplication)
// router.delete('/:id', jobApplyControllers.deleteApply)
router.put('/update', jobApplyControllers.updateJobResult)

module.exports = router;