const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  orderDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  purchaseTotal: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Order
