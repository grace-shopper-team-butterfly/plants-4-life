const router = require('express').Router()
const { models: { User, Book, Order, BookOrder } } = require('../db')
module.exports = router


// Search for the user that is shopping and find the cart
// PUT api/orders/remCart/:id - remove verbs from path
router.put('/modifyCart/:id/:quantity', async (req, res, next) => {
  try {
    const user = await User.findByToken(req.body.token)
    let book = await Book.findByPk(req.params.id)

    // Finding or creating a cart (isFulfilled: false)
    let cart = await Order.findOne({ where: { userId: user.id, isFulfilled: false }, include: [{ model: Book, as: 'books' }] })

    // Modifying the quantity of books for the cart
    const bookOrder = await BookOrder.findOne({ where: { orderId: cart.id, bookId: book.id } })
    if (Number(req.params.quantity) !== 0) {
      await bookOrder.update({ quantity: req.params.quantity })
      await bookOrder.save()
    } else {
      console.log(Object.keys(Order.prototype))
      await bookOrder.destroy()
    }
    res.json(cart)

  } catch (error) {
    console.log(error)
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

