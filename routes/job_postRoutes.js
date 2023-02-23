const express = require('express');
const router = express.Router();
const jobPostControllers = require('../controller/job_postControllers');

router.get('/info/:id',jobPostControllers.getJob)
router.get('/',jobPostControllers.getAllJobPost)
router.post('/',jobPostControllers.addJobPosts)
router.delete('/:id', jobPostControllers.deleteJobPost)
router.put('/update', jobPostControllers.updateJobPost)
router.get('/:id', jobPostControllers.getAllJobsForUser)
module.exports = router;