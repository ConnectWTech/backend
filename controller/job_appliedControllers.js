const { request, response } = require('express');
const {pool} = require('../db.js');
const jobsApplied = require('../models//job_appliedModels')

const usersJobsApplied = async (request, response) => {
    const id = request.params.userid;
    const getAppliedJobsInfo =  await jobsApplied.getAllAppliedJobs(id);
    const allinfo = getAppliedJobsInfo.rows[0];
    response.send(allinfo);
   
}
const getAllApplied =  async(request,response)=>{
    const id = request.params.jobid;
    const allApplied = await jobsApplied.getallApplicant(id)
    response.send(allApplied.rows[0]);
}





module.exports ={
    usersJobsApplied,
    getAllApplied
    
}

