const { faker } = require('@faker-js/faker');

const random = (n) => {
  return Math.ceil(Math.random()*n);
}

const createFakePost = () => ({
  user_id: random(25),
  title: faker.lorem.words(random(10)),
  content: faker.lorem.paragraphs(random(10), '\n\n')
})

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  const fakePosts = [];
  const numPosts = 500;

  for (let i = 0; i < numPosts; i++) {
    fakePosts.push(createFakePost());
  }

  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert(fakePosts);
};
