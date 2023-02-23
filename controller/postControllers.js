const { request, response } = require('express');
const {pool} = require('../db.js');
const post = require('../models/postsModels')

const addPosts = async (request, response) => {
    const {title, hashtag, technologies, bio, photo, url, userid} = request.body;
    const postInfo =  await post.postToDB(title, hashtag, technologies, bio, photo, 0, url, userid);
    const insertedPost = postInfo.rows[0];
    return response.send(insertedPost);
   
}
const getAllPost =  async(request,response)=>{
    const allPosts = await post.allPost()
    return response.send(allPosts.rows);
}
const getAllUserPost =  async(request,response)=>{
    const id = request.params.id;
    const allPosts = await post.getAllPostFromUser(id)
    return response.send(allPosts.rows);
}
const getPost =  async(request,response)=>{
    const id = request.params.postid;
    try{
        const posts = await post.getAllPostById(id)
    return response.send(posts.rows);
    }catch(e){
        return response.send(e)
    }
    
}

const deletePosts = async(request,response) =>{
    const id = request.params.id;
    const deletePostById = await post.deletePost(id)
    response.status(200).json(deletePostById)
}

const updatePost = async (request, response) => {
    const {title, hashtag, technologies, bio, photo, url, id} = request.body;
    const updatedPost =  await post.updatePost(title, hashtag, technologies, bio, photo, url, id);
    const postNewInfo = updatedPost.rows[0];
    return response.send(postNewInfo);
   
}
const updateLike = async(request,response) =>{
    const id = request.params.id;
    const addOrSubtract = request.params.addOrSubtract;
    let likes;
    if(addOrSubtract === 'add'){
        likes = await post.updateLikes(1,id)
        response.status(200).json(likes.rows[0])
    }else{
        likes = await post.updateLikes(-1,id)
        response.status(200).json(likes.rows[0])
    }
   
}




module.exports ={
    addPosts,
    updatePost,
    deletePosts,
    updateLike,
    getAllPost,
    getAllUserPost,
    getPost
    
}

