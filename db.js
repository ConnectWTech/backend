
const { Pool } = require('pg');


const pool = new Pool({
    database: 'CWTech',
    user:     '',
    password: ''
})


module.exports = {
    pool
}