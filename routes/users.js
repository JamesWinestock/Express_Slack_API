const express = require('express')
const router = express.Router()

const thinky = require('thinky')()
const r = thinky.r

// GET request to /login
router.get('/', function(req, res, next) {
    r.db('mf_users').table('users')
      .run().then((users) => {
        console.log(users)
        res.json(users)
      })
})

// POST request to /login
router.post('/users/newUser', function(req, res, next) {
    const test = req.body.name
    res.send(test)
})

// function addUser()
var TestUser = thinky.createModel("TestUser", {
  id: String,
  name: String,
  email: String,
})

router.get('/newUser', (req, res) => {
  TestUser.save({
    name: 'sawyer',
    email: 'sawyer@test.com'
  }).then((result) => {
    console.log('Saved!')
    res.send(result)
  })
})

module.exports = router
