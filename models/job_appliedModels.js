const {pool} = require('../db.js');

class JobApplied{
    static applyToJob(userid,jobs_id, accepted_or_denied_or_waiting){
        return pool.query(
            'INSERT INTO job_applied(userid, jobs_id, accepted_or_denied_or_waiting) VALUES($1, $2, $3) RETURNING *',[userid, jobs_id, accepted_or_denied_or_waiting]);
        }
    
    static getAllAppliedJobs(userid){
        return pool.query('SELECT * FROM job_applied WHERE userid = $1 INNER JOIN job_post ON job_applied.jobs_id=job_post.id;',[userid]);
     }
    static getallApplicant(jobsId){
        return pool.query('SELECT * FROM job_applied WHERE jobs_id = $1 INNER JOIN users ON job_applied.userid=users.id;',[jobsId]);
    }
    static declineAccept(userid, status){
        return pool.query('UPDATE job_applied SET accepted_or_denied_or_waiting = $1 WHERE userid = $2 RETURNING *', [status,userid])
    }
    static deleteApplication(id){
        return pool.query('DELETE FROM job_applied WHERE id = $1',[id])
    }
   

}

module.exports = JobApplied;