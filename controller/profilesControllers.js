const { request, response } = require('express');
const {pool} = require('../db.js');
const profile = require('../models/profilesModels')

const addProfile = async (request, response) => {
    const {technologies,bio,photo,userid} = request.body;
        const postProfile =  await profile.postProfileToDB(technologies,bio,photo,userid);
        const insertedProfile = postProfile.rows[0];
        return response.send(insertedProfile);
   
}

const getProfileInfo = async(request,response) =>{
    const id = request.params.id;
    const profileInfo = await profile.getProfileInfo(id)
    return response.status(200).json(profileInfo.rows)
}

const updateProfile = async (request, response) => {
    const {technologies,bio,photo,userid} = request.body;
        const updateProfile =  await profile.updateProfileInfo(technologies,bio,photo,userid);
        const insertedProfile = updateProfile.rows[0];
        return response.send(insertedProfile);
   
}



module.exports ={
    addProfile,
    getProfileInfo,
    updateProfile
    
}

