const router = require('express').Router()
const { models: { User, Book, Order, BookOrder } } = require('../db')
module.exports = router

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

// PUT: api/orders/
