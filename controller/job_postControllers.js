const { request, response } = require('express');
const {pool} = require('../db.js');
const jobPost = require('../models/job_postModels')

const addJobPosts = async (request, response) => {
    const {technologys, bio, photo, userid} = request.body;
    const postInfo =  await jobPost.postJobToDB(technologys, bio, photo, userid);
    const insertedPost = postInfo.rows[0];
    response.send(insertedPost);
   
}

const deleteJobPosts = async(request,response) =>{
    const id = request.params.id;
    const deletePostById = await jobPost.deleteJobPost(id);
    response.status(200).json(deletePostById);
}

const updateJobPost = async (request, response) => {
    const {technologys, bio, photo, id} = request.body;
    const updatedPost =  await jobPost.updatePost(technologys, bio, photo, id);
    const postNewInfo = updatedPost.rows[0];
    response.send(postNewInfo);
   
}
const getAllJobPost = async(request,response) =>{
    const allJobPost = await jobPost.getAllJobPost();
    response.send(allJobPost.rows);
}

const getAllJobsForUser = async(request,response) =>{
    const id = request.params.id;
    const allUsersJobPost = await jobPost.getAllJobsForUser(id);
    response.status(200).json(allUsersJobPost.rows);
}




module.exports ={
    addJobPosts,
    deleteJobPosts,
    updateJobPost,
    getAllJobsForUser,
    getAllJobPost
    
}