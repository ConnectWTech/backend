
const { request, response } = require('express');
const {pool} = require('../db.js');
const user = require('../models/usersModels')
const bcrypt = require('bcrypt')

const addUser = async (request, response) => {
    const {firstname,lastname,username,email,password,type_of} = request.body;
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const postUser =  await user.postUserToDB(firstname,lastname,username,email,hashedPassword,type_of);
        const insertedUser = postUser.rows[0];
         return response.send(insertedUser);
    }catch (e){
        response.send(e)
    }

    
}

const authUser = async(request,response) =>{
    const {username, password} = request.body;
    const userInfo = await user.checkUser(username)
 
    if (userInfo.rows.length === 0 ){
        return response.send({alert: "invalid username"})
    }
    try{
        if (await bcrypt.compare(password, userInfo.rows[0].password)){
            return response.send({alert: "logged in", loginData: userInfo.rows[0] })
        }else {
            return response.send({alert:'invalid password'})
        }
    }catch(e){
        return response.send(e)
    }
}
const checkUsername = async(request,response) =>{
    const users = request.params.username;
    const userInfo = await user.checkUser(users)
    if(userInfo.rows[0]){
         return response.send(true)
    }
    else{
        return response.send(false)
    }
   
}




module.exports ={
    addUser,
    authUser,
    checkUsername
    
}

