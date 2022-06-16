const router = require('express').Router()
const { models: { User }} = require('../db')
const { requireToken, isAdmin } = require('./gatekeeping')
module.exports = router

router.get('/:token', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.params.token)
    if (user.isAdmin){
    const usersData = await User.findAll({
      // explicitly select only the id and username fields
      attributes: ['id', 'username', 'email']
    })
    res.json(usersData)}
    else {return res.send()}
  } catch (err) {
    next(err)
  }
})
