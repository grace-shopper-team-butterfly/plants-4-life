const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  orderDate: {
    type: Sequelize.DATE
  },
  purchaseTotal: {
    type: Sequelize.DECIMAL(15, 6)
  },
  isFulfilled: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Order
