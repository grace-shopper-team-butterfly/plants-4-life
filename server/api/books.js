const router = require('express').Router()
const { models: { User, Book, Order } } = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const books = await Book.findAll()
    res.json(books)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id)
    res.json(book)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const book = await Book.create(req.body)
    res.json(book)
  } catch (err) {
    next(err)
  }
})

// Find user that is shopping and find the cart
// api/books/addCart/:id
router.put('/addCart/:bookId', async (req, res, next) => {
  try {
    console.log(res.body)
    // const user = User.findByToken(req.body.token)

    // console.log('TOKEN: ', token)
    // console.log('USER', user)

    // let cart = await Order.findOrCreate({ where: { userId: user.id, isFulfilled: false } })
    // cart.addBook(req.params.bookId)
    // console.log('CART: ', cart)
    // console.log('USER: ', user)
    // res.json(cart)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id)
    await book.update(req.body)
    res.json(book)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id)
    await product.destory()
    res.end()
  } catch (err) {
    next(err)
  }
})
