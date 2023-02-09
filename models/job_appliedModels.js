const {pool} = require('../db.js');

class JobApplied{
    static getAllAppliedJobs(userid){
        return pool.query('SELECT * FROM job_applied WHERE userid = $1',[userid]);
     }
    static getallApplicant(jobsId){
        return pool.query('SELECT * FROM job_applied WHERE jobs_id = $1',[jobsId]);
    }
    static declineAccept(userid, status){
        return pool.query('UPDATE job_applied SET accepted_or_denied_or_waiting = $1 WHERE userid = $2 RETURNING *', [status,userid])
    }
   

}

module.exports = JobApplied;