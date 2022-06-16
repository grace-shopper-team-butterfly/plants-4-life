const router = require('express').Router()
const { models: { User }} = require('../db')
const { requireToken, isAdmin } = require('./gatekeeping')
module.exports = router

router.put('/', async (req, res, next) => {
  try {
    const user =  await User.findByToken(req.body.token)
    if (user.isAdmin){
    const usersData = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username', 'email']
    })
    res.json(usersData)}
    else {return res.status(403).send('You shall not pass!')}
  } catch (err) {
    next(err)
  }
})
