const {pool} = require('../db.js');

class Users{
    static postUserToDB(firstname,lastname,username,email,password,type_of){
        return pool.query(
            'INSERT INTO users(firstname,lastname,username,email,password,type_of) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',[firstname,lastname,username,email,password,type_of]);
    
        }
    static checkUser(username){
        return pool.query('SELECT * FROM users WHERE username = $1',[username])
    }

}

module.exports = Users;
