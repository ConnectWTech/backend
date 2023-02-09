const { pool } = require('../db.js');

class Profile{
    static postProfileToDB(technologys,bio,photo,userid){
        return pool.query(
            'INSERT INTO profile(technologys,bio,photo,userid) VALUES($1, $2, $3, $4) RETURNING *',[technologys,bio,photo,userid]);
    
        }
    static getProfileInfo(id){
        return pool.query('SELECT * FROM profile WHERE userid = $1',[id])
    }
    static updateProfileInfo(technologys,bio,photo,userid){
        return pool.query('UPDATE profile SET technologys = $1, bio = $2, photo = $3 WHERE userid = $4 RETURNING *', [technologys,bio,photo,userid])
    }
}

module.exports = Profile;
