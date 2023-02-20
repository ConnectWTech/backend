const { request, response } = require('express');
const {pool} = require('../db.js');
const comments = require('../models/commentsModels')

const addComment = async (request, response) => {
    const {text,userid,postid} = request.body;
    const commentInfo =  await comments.commentOnPost(text,0,userid,postid);
    const insertedComment = commentInfo.rows[0];
    return response.send(insertedComment);
   
}

const deleteComments = async(request,response) =>{
    const id = request.params.id;
    const deleteCommentById = await comments.deleteComment(id)
     return response.status(200).json(deleteCommentById)
}


const updateLike = async(request,response) =>{
    const id = request.params.id;
    const addOrSubtract = request.params.addOrSubtract;
    let likes;
    if(addOrSubtract === 'add'){
        likes = await comments.updateLikes(1,id)
    }else{
        likes = await comments.updateLikes(-1,id)
    }
   
    return response.status(200).json(likes)
}
 
const getcommentsForPost= async(request,response) =>{
    const id = request.params.id;
    const allComments = await comments.getAllByID(id);
    return response.status(200).json(allComments.rows);
}



module.exports ={
    addComment,
    deleteComments,
    updateLike,
    getcommentsForPost
    
}

