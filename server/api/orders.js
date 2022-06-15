const router = require('express').Router()
const { models: { User, Book, Order } } = require('../db')
module.exports = router

// api/orders
router.get('/', async (req, res, next) => {
  try {
    const token = window.localStorage.getItem(TOKEN)
    const user = User.findByToken(token)

    let cart = await Order.findOrCreate({
      where: { userId: user.id, isFulfilled: false }, include: [{
        model: BookOrder
      }]
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})



