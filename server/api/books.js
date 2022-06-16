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
// api/books/addCart/:id - remove verbs from path
router.put('/addCart/:bookId', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.body.token)
    let book = await Book.findByPk(req.params.bookId)

    let [cart, created] = await Order.findOrCreate({ where: { userId: user.id, isFulfilled: false } })
    cart.addBook(book.id, { through: { quantity: 1, subTotal: book.price } })

    res.json(cart)
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
    await book.destory()
    res.send(book)
  } catch (err) {
    next(err)
  }
})
