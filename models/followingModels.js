const {pool} = require('../db.js');

class Following{
    static addFollowing(userid,followers_id){
        return pool.query(
            'INSERT INTO following(userid,followers_id) VALUES($1, $2) RETURNING *',[userid,followers_id]);
        }
    static unfollow(userid,followers_id){
        return pool.query('DELETE FROM following WHERE userid = $1 AND followers_id = $2',[userid, followers_id])
    }
    static getAllFollowing(followers_id){
        return pool.query('SELECT * FROM following where followers_id = $1',[followers_id])
    }
    static getAllFollowers(userid){
        return pool.query('SELECT * FROM following where userid = $1',[userid])
    }

}

module.exports = Following;