const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  orderDate: {
    type: Sequelize.DATE
  },
  purchaseTotal: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  isFulfilled: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

Order.prototype.calculateTotal = async function() {
  const books = await this.getBooks()
  const bookPrices = books.map(book => book.price)
  console.log('BOOKS', books)
  // in future incorporate quantity so that it is price*quantity
  const total = bookPrices.reduce((partialSum, a) => partialSum + a, 0)
  this.update({
    purchaseTotal: total
  })
  this.save()
}


module.exports = Order
