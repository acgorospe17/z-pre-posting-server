const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const db = require('knex')(configuration);

// (async () => {
//   try {
//     await db.migrate.rollback()
//     await db.migrate.latest()
//     await db.seed.run()
//   } catch (err) {
//     console.error(err)
//   }
// })();

module.exports = db;

/*
npx knex migrate:make _
npx knex migrate:latest
npx knex migrate:rollback
npx knex seed:make _
npx knex seed:run
*/