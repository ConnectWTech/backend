const {pool} = require('../db.js');

class JobApplied{
    static applyToJob(userid,jobs_id, accepted_or_denied_or_waiting){
        return pool.query(
            'INSERT INTO job_applied(userid, jobs_id, accepted_or_denied_or_waiting) VALUES($1, $2, $3) RETURNING *',[userid, jobs_id, accepted_or_denied_or_waiting]);
        }
    static job (id){
        return pool.query('SELECT * FROM job_post INNER JOIN users ON users.userid=job_post.userid WHERE id = $1',[id]);
     }
    
    static getAllAppliedJobs(userid){
        return pool.query('SELECT * FROM job_applied INNER JOIN job_post ON job_applied.jobs_id=job_post.id INNER JOIN users ON job_post.userid=users.userid WHERE job_applied.userid = $1 ORDER BY job_applied.created_at DESC ;',[userid]);
     }
    static getallApplicant(jobsId){
        return pool.query('SELECT * FROM job_applied INNER JOIN users ON job_applied.userid=users.userid WHERE jobs_id = $1 ORDER BY job_applied.created_at DESC;',[jobsId]);
    }
    static declineAccept(id, status){
        return pool.query('UPDATE job_applied SET accepted_or_denied_or_waiting = $1 WHERE id = $2 RETURNING *', [status,id])
    }
    static deleteApplication(id){
        return pool.query('DELETE FROM job_applied WHERE id = $1',[id])
    }
   

}

module.exports = JobApplied;