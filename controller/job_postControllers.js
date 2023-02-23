const { request, response } = require('express');
const {pool} = require('../db.js');
const jobPost = require('../models/job_postModels')

const addJobPosts = async (request, response) => {
    const {technologies, bio, title, userid} = request.body;
    const postInfo =  await jobPost.addJobPost(technologies, title, bio, userid);
    const insertedPost = postInfo.rows[0];
    response.send(insertedPost);
   
}

const deleteJobPost = async(request,response) =>{
    const id = request.params.id;
    const deletePostById = await jobPost.deleteJobPosts(id);
    response.status(200).json(deletePostById);
}

const updateJobPost = async (request, response) => {
    const {technologies, bio, title, id} = request.body;
    const updatedPost =  await jobPost.updateJobPost(technologies, bio, title, id);
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

const getJob=  async(request,response)=>{
    const id = request.params.id;
    try{
        const posts = await jobPost.getAllJobPostById(id)
    return response.send(posts.rows);
    }catch(e){
        return response.send(e)
    }
    
}


module.exports ={
    addJobPosts,
    deleteJobPost,
    updateJobPost,
    getAllJobsForUser,
    getAllJobPost,
    getJob
    
}