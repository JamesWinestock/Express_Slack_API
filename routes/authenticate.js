var express = require('express');
var router = express.Router();

// GET request to /login
router.get('/', function(req, res, next) {
  r.db('mf_users').table('authenticate')
    .run().then((users) => {
      res.json(users)
    })
});

// POST request to /login
router.post('/', function(req, res, next) {
    // do something
});

module.exports = router;
