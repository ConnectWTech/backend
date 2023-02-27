const {pool} = require('../db.js');

class JobPost{
    static addJobPost(technologies, title, bio, userid){
        return pool.query(
            'INSERT INTO job_post(technologies, title, bio, userid) VALUES($1, $2, $3, $4) RETURNING *',[technologies,title, bio, userid]);
        }
    static updateJobPost(technologies, bio, title, id){
        return pool.query('UPDATE job_post SET technologies = $1, bio = $2, title = $3 WHERE id = $4 RETURNING *', [technologies, bio, title, id])
    }
    static deleteJobPosts(id){
        return pool.query('DELETE FROM job_post WHERE id = $1',[id])
    }
    static getAllJobPost(){
        return pool.query('SELECT * FROM job_post INNER JOIN users ON users.userid=job_post.userid ORDER BY created_at DESC ;')
    }
    static getAllJobsForUser(userid){
        return pool.query('SELECT * FROM job_post INNER JOIN users ON users.userid=job_post.userid WHERE job_post.userid = $1 ORDER BY created_at DESC', [userid])
    }
    static getAllJobPostById(id){
        return pool.query('SELECT * FROM job_post WHERE id = $1', [id])
    }

}


module.exports = JobPost;
