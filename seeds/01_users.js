const { faker } = require('@faker-js/faker');

const createAboutMe = () => {
  return faker.lorem.sentences(Math.ceil(Math.random() * 3));
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {fb_uid: 'XsDdgmWJS1YnVyHsrgkZ6uyemNC2', first_name: 'Phil', last_name: 'Brown', about_me: createAboutMe()},
    {fb_uid: '2C13o0lTdIedMXMPt8XU7j4fykJ2', first_name: 'Janus', last_name: 'Fury', about_me: createAboutMe()},
    {fb_uid: 'UvcvAcRPfOQVB9oC577Tw0GxU0p1', first_name: 'Emily', last_name: 'Cleod', about_me: createAboutMe()},
    {fb_uid: 'fXWYPt1nGVdUCx0hUg4SxTex8wC2', first_name: 'Matt', last_name: 'Ballant', about_me: createAboutMe()},
    {fb_uid: 'tmshMHlWY0WnqEA7Omp7jjp1nm92', first_name: 'Mike', last_name: 'Sloan', about_me: createAboutMe()},
    {fb_uid: 'fy3RPWylKpdQSi5EsdzH6wBl1Oy2', first_name: 'Alice', last_name: 'Goresky', about_me: createAboutMe()},
    {fb_uid: 'BtPj9ji7E6PUKEdzRPLp03Oo43K3', first_name: 'Scott', last_name: 'Zediah', about_me: createAboutMe()},
    {fb_uid: 'kmBnRcPW6GY8Gahgv7G6ZBOCZzo2', first_name: 'Yannis', last_name: 'Xing', about_me: createAboutMe()},
    {fb_uid: 'dteKy2NLc5V0ZmChB8aa6Nt8Q662', first_name: 'Felicia', last_name: 'Bebuck', about_me: createAboutMe()},
    {fb_uid: 'OmMeuqrkm8RqFHDVl1LzU5DYwnx2', first_name: 'Dexter', last_name: 'Morgan', about_me: createAboutMe()},
    {fb_uid: 'zWUqxDGrB3aEpEllSyXs94z1L5A3', first_name: 'Jill', last_name: 'Baumga', about_me: createAboutMe()},
    {fb_uid: 'uoz5j8Tj5jPvYAzvqfL2n3B0Hr83', first_name: 'Freya', last_name: 'Hirsch', about_me: createAboutMe()},
    {fb_uid: '2IQtAckQj9YDcHS5PvSAAngt6eB3', first_name: 'The', last_name: 'Dave', about_me: createAboutMe()},
    {fb_uid: '0WhevEtFMXdraNkPB4MFzgEZ4si2', first_name: 'Julia', last_name: 'Danst', about_me: createAboutMe()},
    {fb_uid: 'Nej1xNPq6JZ63aVbXZOibavKeuj2', first_name: 'Susie', last_name: 'Ravani', about_me: createAboutMe()},
    {fb_uid: 'pKeA9FH5TQUIMIINzTXkbII9hpN2', first_name: 'Brittany', last_name: 'Evoch', about_me: createAboutMe()},
    {fb_uid: '1svDSD21QDV6yq1ykFImPBbzCVI2', first_name: 'John', last_name: 'Hill', about_me: createAboutMe()},
    {fb_uid: 'd8yqbchYNxMRdT7RynRqH2NN1PG2', first_name: 'Richard', last_name: 'Temple', about_me: createAboutMe()},
    {fb_uid: 'sggRD9IsS5aZLX7bfEE2s4rXgng1', first_name: 'Tyler', last_name: 'Lamprech', about_me: createAboutMe()},
    {fb_uid: 'SChUVamBuJNySpazsWK2htBYMK93', first_name: 'James', last_name: 'Higgins', about_me: createAboutMe()},
    {fb_uid: 'WjIMcUyu8BaCScZBWQ8KFwInBn73', first_name: 'Kirsten', last_name: 'Dehen', about_me: createAboutMe()},
    {fb_uid: 'BPfVuXPS1dOarPZfimgRMtbDDQp2', first_name: 'Florence', last_name: 'Myers', about_me: createAboutMe()},
    {fb_uid: 'cIAvr27RWXNhkJ5j94LHnmIgk2m2', first_name: 'Lance', last_name: 'Zoyd', about_me: createAboutMe()},
    {fb_uid: 'NKMNiakXG3R8S215BHVw54TiR423', first_name: 'Prittany', last_name: 'Ovechkin', about_me: createAboutMe()},
    {fb_uid: 'g9ZlTr4D5IOTcZ3IB719ozCGe5t1', first_name: 'Alvan', last_name: 'Mar', about_me: createAboutMe()},
  ]);
};