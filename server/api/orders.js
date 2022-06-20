const router = require('express').Router()
const { models: { User, Book, Order, BookOrder } } = require('../db')
module.exports = router

router.put('/checkout/:id', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization)
    // Finding cart
    let cart = await Order.findOne({ where: { userId: user.id, isFulfilled: false }, include: [{ model: Book, as: 'books' }] })

    // Setting cart to fufilled order
    await cart.update({ isFulfilled: true })
    await cart.calculateTotal()
    await cart.save()

    res.json({})
  } catch (error) {
    next(error)
  }
})

// Search for the user that is shopping and find the cart
// PUT api/orders/remCart/:id - remove verbs from path
router.put('/modifyCart/:id/:quantity', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization)
    let book = await Book.findByPk(req.params.id)

    // Finding or creating a cart (isFulfilled: false)
    let cart = await Order.findOne({ where: { userId: user.id, isFulfilled: false }, include: [{ model: Book, as: 'books' }] })

    // Modifying the quantity of books for the cart
    const bookOrder = await BookOrder.findOne({ where: { orderId: cart.id, bookId: book.id } })

    await bookOrder.update({ quantity: req.params.quantity, subTotal: book.price * req.params.quantity })
    await bookOrder.save()

    await cart.calculateTotal()
    await cart.save()

    const updatedCart = await Order.findByPk(cart.id, { include: [{ model: Book, as: 'books' }] })

    res.json(updatedCart)

  } catch (error) {
    next(error)
  }
})

// GET: api/orders
router.get('/:token', async (req, res, next) => {
  try {
    // EDIT THIS LOCATION TO INCLUDE TOKEN
    const user = await User.findByToken(req.params.token)

    let [cart, created] = await Order.findOrCreate({
      where: { userId: user.id, isFulfilled: false }, include: [{
        model: Book, as: 'books'
      }]
    })

    res.json(cart)
  } catch (err) {
    next(err)
  }
})

// GET: api/orderHistory => to get user's order history of fullfilled orders
router.get('/orderHistory/:token', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.params.token)
    const orderHistory = await Order.findAll({
      where: {
        userId: user.id,
        isFulfilled: true
      },
      include: [{
        model: Book
      }]
    })
    res.json(orderHistory)
  } catch (err) {
    next(err)
  }
})


router.delete('/:id', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization)
    let book = await Book.findByPk(req.params.id)

    // Finding or creating a cart (isFulfilled: false)
    let cart = await Order.findOne({ where: { userId: user.id, isFulfilled: false }, include: [{ model: Book, as: 'books' }] })

    const bookOrder = await BookOrder.findOne({ where: { orderId: cart.id, bookId: book.id } })

    await bookOrder.destroy()

    let newCart = await Order.findOne({ where: { userId: user.id, isFulfilled: false }, include: [{ model: Book, as: 'books' }] })

    await newCart.calculateTotal()

    res.json(newCart)
  } catch (error) {
    next(error)
  }
})
