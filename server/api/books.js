const router = require('express').Router()
const { models: { User, Book }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
      const users = await Book.findAll()
      res.json(users)
    } catch (err) {
      next(err)
    }
  })