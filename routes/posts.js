const express = require('express');
const db = require('../db');

const router = express.Router();
router.use(express.json());

router.route('/')
  .get((req, res) => {
    const user_id = req.query.user_id

    if (user_id) {
      db
      .select('*')
      .from('posts')
      .where('user_id', '=', user_id)
      .then((data) => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'Could not GET users data.'
        })
      );
    } else {
      db
      .select('*')
      .from('posts')
      .then((data) => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'Could not GET posts data.'
        })
      );
    }
  })
  .post((req, res) => {
    db
      .insert({
        user_id: req.body.user_id,
        title: req.body.title,
        content: req.body.content
      })
      .returning('*')
      .into('posts')
      .then((data) => res.status(201).json(data[0]))
      .catch(err => {
        console.log(err);
        res.status(404).json({
          message:
            'Could not POST to posts data.'
        })
      });
  })

router.route('/:id')
  .get((req, res) => {
    db
    .select('*')
    .from('posts')
    .where('id', '=', req.params.id)
    .then((data) => res.status(200).json(data[0]))
    .catch(err =>
      res.status(404).json({
        message:
          'Could not GET post data.'
      })
    );
  })
  .put((req, res) => {
    db
      .select('*')
      .from('posts')
      .where('id', '=', req.params.id)
      .update({
        user_id: undefined,
        title: req.body.title,
        content: req.body.content
        })
      .returning('*')
      .then((data) => res.status(204).json(data[0]))
      .catch(err =>
        res.status(404).json({
          message:
            'Could not PUT user data.'
        })
      );
    })
  .delete((req, res) => {
      db
        .select('*')
        .from('posts')
        .where('id', '=', req.params.id)
        .delete()
        .then((data) => res.status(200).json(data[0]))
        .catch(err =>
          res.status(404).json({
            message:
              'Could not DELETE post data.'
          })
        );
    })

module.exports = router;