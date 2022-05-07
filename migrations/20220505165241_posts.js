/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.string('title').notNullable();
    table.string('content', 10000).notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.timestamps(true, true); // adds created_at and updated_at
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('posts', table => {
    table.dropForeign('user_id');
  })
  .then(() => {
    return knex.schema.dropTableIfExists('posts');
  });
};
