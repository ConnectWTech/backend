const { request, response } = require('express');
const {pool} = require('../db.js');
const jobsApplied = require('../models//job_appliedModels')

const usersJobsApplied = async (request, response) => {
    const id = request.params.id;
    const getAppliedJobsInfo =  await jobsApplied.getAllAppliedJobs(id);
    const allinfo = getAppliedJobsInfo.rows;
    return response.send(allinfo);
}
const getAllApplied =  async(request,response)=>{
    const id = request.params.id;
    const allApplied = await jobsApplied.getallApplicant(id)
    return response.send(allApplied.rows);
}
const addApplication = async(request, response) => {
    const {userid, jobs_id} = request.body;
    const postInfo =  await jobsApplied.applyToJob(userid, jobs_id, "Waiting");
    const inserted = postInfo.rows[0];
    return response.send(inserted);
   
}


const jobInfo = async(request, response) => {
    const id = request.params.id;
    const info =  await jobsApplied.job(id);
    const inserted = info.rows[0];
    return response.send(inserted);
   
}
 const updateJobResult = async(request,response)=>{
    const {id, status} = request.body;
    const info = await jobsApplied.declineAccept(id,status)
   
    return response.send(info.rows[0])
 }
 const deletejob = async(request,response)=>{
    const id = request.params.id;
    const deletejobById = await jobsApplied.deleteApplication(id)
    return response.send(deletejobById)
 }

module.exports ={
    usersJobsApplied,
    getAllApplied,
    addApplication,
    jobInfo,
    updateJobResult,
    deletejob
    
}

