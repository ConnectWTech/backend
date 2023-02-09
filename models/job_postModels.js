const {pool} = require('../db.js');

class JobPost{
    static addJobPosts(technologys, bio, photo, userid){
        return pool.query(
            'INSERT INTO job_post(technologys, bio, photo, userid) VALUES($1, $2, $3, $4) RETURNING *',[technologys, bio, photo, userid]);
        }
    static updateJobPost(technologys, bio, photo, id){
        return pool.query('UPDATE job_post SET technologys = $1, bio = $2, photo = $3, WHERE id = $4 RETURNING *', [technologys, bio, photo, id])
    }
    static deleteJobPosts(id){
        return pool.query('DELETE FROM job_post WHERE id = $1',[id])
    }
    static getAllJobPost(){
        return pool.query('SELECT * FROM job_post')
    }
    static getAllJobsForUser(userid){
        return pool.query('SELECT * FROM job_post WHERE userid = $1', [userid])
    }

}

module.exports = JobPost;
