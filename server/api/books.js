const router = require('express').Router()
const { models: { User, Book, Order, BookOrder } } = require('../db')
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

// Search for the user that is shopping and find the cart
// PUT api/books/addCart/:id - remove verbs from path
router.put('/addCart/:bookId', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.body.token)
    let book = await Book.findByPk(req.params.bookId)

    // Finding or creating a cart (isFulfilled: false)
    let [cart, created] = await Order.findOrCreate({ where: { userId: user.id, isFulfilled: false }, include: [{ model: Book, as: 'books' }] })

    // Adding the book to the cart

    if (await cart.hasBook(book.id)) {
      const bookOrder = await BookOrder.findOne({ where: { orderId: cart.id, bookId: book.id } })
      let newQty = bookOrder.quantity + 1
      await bookOrder.update({ quantity: newQty, subTotal: book.price * newQty })
      await bookOrder.save()
    } else {
      cart.addBook(book.id, { through: { quantity: 1, subTotal: book.price } })
    }

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

router.delete('/', async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id)
    await book.destory()
    res.send(book)
  } catch (err) {
    next(err)
  }
})
