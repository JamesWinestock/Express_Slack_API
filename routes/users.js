const express = require('express')
const router = express.Router()

const thinky = require('thinky')()
const r = thinky.r

// GET request to /login

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', function(req, res, next) {
    r.db('mf_users').table('users')
      .run().then((users) => {
        res.json(users)
      })
})



// POST request to /login
router.post('/newUser', function(req, res, next) {
      var userEntry = {
        name: req.body.name,
        email: req.body.email,
        day: req.body.day
      }
      res.send(userEntry)
      r.db('mf_users').table('users').insert({
        userEntry
  }).run().then((user) => {
    return user
  })
})

router.get('/newUser', (req, res) => {
  user.save
    console.log(test)
  .then((result) => {
    console.log('Saved!')
    res.send(result)
  })
})



module.exports = router
