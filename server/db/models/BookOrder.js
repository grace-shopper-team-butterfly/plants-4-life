const Sequelize = require('sequelize')
const db = require('../db')


const BookOrder = db.define('bookOrder', {
  quantity: {
    type: Sequelize.INTEGER
  },
  subTotal: {
    type: Sequelize.INTEGER // to pennies
  }
})

module.exports = BookOrder
