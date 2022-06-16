const router = require('express').Router()
const { models: { User, Book }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
      const books = await Book.findAll()
      res.json(books)
    } catch (err) {
      next(err)
    }
  })

  router.get('/:id', async(req, res, next) => {
    try {
        const book = await Book.findByPk(req.params.id)
        res.json(book)
    } catch (error) {
        next(error)
    }
})

  router.post('/', async(req, res, next) => {
    try{
      const book = await Book.create(req.body)
      res.json(book)
    }catch(err){
      next(err)
    }
  })

  router.put('/:id', async(req, res, next) => {
    try{
      const book = await Book.findByPk(req.params.id)
      await book.update(req.body)
      res.json(book)
    }catch(err){
      next(err)
    }
  })

  router.delete('/:id', async(req, res, next) => {
    try{
      const book = await Book.findByPk(req.params.id)
      await book.destory()
      res.send(book)
    }catch(err){
      next(err)
    }
  })
