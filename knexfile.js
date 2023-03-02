

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "CWTech",
      user: "",
      password: "",
    },
  },
  production: {
    client: 'postgresql',
    connection: 'postgresql://postgres:nIBHIm9NV6OG2vTg9jlE@containers-us-west-196.railway.app:6369/railway',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
