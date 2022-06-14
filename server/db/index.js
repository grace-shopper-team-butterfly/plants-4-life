//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Book = require('./models/Book')
const Order = require('./models/Order')
const BookOrder = require('./models/BookOrder')

// Associations
// User-Order Association
User.hasMany(Order)
Order.belongsTo(User)

// Book-Order Association
Order.belongsToMany(Book, { through: BookOrder })
Book.belongsToMany(Order, { through: BookOrder })

// BookOrder-Book Assocation
BookOrder.belongsTo(Book)
Book.hasMany(BookOrder)


module.exports = {
  db,
  models: {
    User,
    Book,
    Order,
    BookOrder
  },
}
