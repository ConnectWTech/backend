const express = require('express');
const router = express.Router();
const jobPostControllers = require('../controller/job_postControllers');

router.get('/',jobPostControllers.getAllJobPost)
router.post('/',jobPostControllers.addJobPosts)
router.delete('/:id', jobPostControllers.deleteJobPosts)
router.put('/update', jobPostControllers.updateJobPost)
router.get('/:id', jobPostControllers.getAllJobsForUser)
module.exports = router;