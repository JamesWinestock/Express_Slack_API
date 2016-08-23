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


router.get('/:id', function(req, res) {
  r.db('mf_users').table('users').get(req.params.id)
    .run().then((user) => {
      res.json(user)
    })
});

router.delete('/:id', function(req, res) {
  r.db('mf_users').table('users').get(req.params.id).delete()
    .run().then(result => {
      res.send(result)
    })
})

router.post('/newUser', function(req, res, next) {
      res.send(req.body)
      r.db('mf_users').table('users').insert({
        name: req.body.name,
        email: req.body.email,
        day: req.body.day,
        week: req.body.week
  }).run().then((user) => {
    return user
  })
})


router.post('/:id', function(req, res) {
  r.db('mf_users').table('users').get(req.params.id).update({
    name: req.body.name,
    email: req.body.email,
    day: req.body.day,
    week: req.body.week
  })
  .run().then(user => {
    return user
  })
})



// router.get('/newUser', (req, res) => {
//   user.save
//     console.log(test)
//   .then((result) => {
//     console.log('Saved!')
//     res.send(result)
//   })
// })



module.exports = router
