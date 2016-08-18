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
        // console.log(users)
        res.json(users)
      })
})



// POST request to /login
router.post('/newUser', function(req, res, next) {
      var test = req.body.name
      res.send(test)
      r.db('mf_users').table('users').insert({
        name: test
  }).run().then((user) => {
    console.log(user)
  })
})

// function addUser()
// const user = thinky.createModel("User", {
//   id: String,
//   name: String,
//   email: String,
// })


router.get('/newUser', (req, res) => {
  user.save
    console.log(test)
  .then((result) => {
    console.log('Saved!')
    res.send(result)
  })
})



module.exports = router
