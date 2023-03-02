const { Pool } = require('pg')
const connectionString = 'postgresql://postgres:nIBHIm9NV6OG2vTg9jlE@containers-us-west-196.railway.app:6369/railway'

const developmentPool = new Pool(
  {
    database: 'todo4',
    user:     'postgres',
    password: ''
  })
 
 
 const productionPool = new Pool({
  connectionString
 })
 

const pool = (process.env.NODE_ENV === "production" ? productionPool: developmentPool)
 
module.exports = pool