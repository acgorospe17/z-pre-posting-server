// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DB_CONNECTION_STRING || 'postgres://postgres:password@localhost:5432/zpre-posting'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

};
