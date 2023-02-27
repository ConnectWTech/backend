const { pool } = require('../db.js');

class Profile{
    static postProfileToDB(technologies,bio,photo,userid){
        return pool.query(
            'INSERT INTO profile(technologies,bio,photo,userid) VALUES($1, $2, $3, $4) RETURNING *',[technologies,bio,photo,userid]);
    
        }
    static getProfileInfo(id){
        return pool.query('SELECT * FROM profile INNER JOIN users ON users.userid=profile.userid WHERE profile.userid = $1',[id])
    }
    static updateProfileInfo(technologies,bio,photo,userid){
        return pool.query('UPDATE profile SET technologies = $1, bio = $2, photo = $3 WHERE userid = $4 RETURNING *', [technologies,bio,photo,userid])
    }
}

module.exports = Profile;
