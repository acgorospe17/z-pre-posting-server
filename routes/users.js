const express = require('express');
const db = require('../db');

const router = express.Router();
router.use(express.json());

router.route('/')
  .get((req, res) => {
    const fb_uid = req.query.fb_uid

    if (fb_uid) {
      db
      .select('*')
      .from('users')
      .where('fb_uid', '=', fb_uid)
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
      .from('users')
      .then((data) => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'Could not GET users data.'
        })
      );
    }
  })
  .post((req, res) => {
    db
      .insert({
        fb_uid: req.body.fb_uid,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        about_me: req.body.about_me
      })
      .returning('*')
      .into('users')
      .then((data) => res.status(201).json(data[0]))
      .catch(err => {
        console.log(err);
        res.status(404).json({
          message:
            'Could not POST to users data.'
        })
      });
  })

router.route('/:id')
  .get((req, res) => {
    db
    .select('*')
    .from('users')
    .where('id', '=', req.params.id)
    .then((data) => res.status(200).json(data[0]))
    .catch(err =>
      res.status(404).json({
        message:
          'Could not GET user data.'
      })
    );
  })
  .put((req, res) => {
    db
      .select('*')
      .from('users')
      .where('id', '=', req.params.id)
      .update({
        fb_uid: req.body.fb_uid,
        first_name: req.body.first_name ?? null,
        last_name: req.body.last_name ?? null,
        about_me: req.body.about_me ?? null
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
        .from('users')
        .where('id', '=', req.params.id)
        .delete()
        .then((data) => res.status(200).json(data[0]))
        .catch(err =>
          res.status(404).json({
            message:
              'Could not DELETE user data.'
          })
        );
    })

module.exports = router;