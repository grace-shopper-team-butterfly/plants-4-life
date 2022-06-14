const Sequelize = require('sequelize')
const db = require('../db')


const BookOrder = db.define('bookOrder', {
  quantity: {
    type: Sequelize.INTEGER
  },
  subTotal: {
    type: Sequelize.DECIMAL(15, 6)
  }
})

module.exports = BookOrder
