const Sequelize = require('sequelize')
const db = require('../db')


const Book = db.define('book', {

  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFprE-bwYgyFf9WYbBkkWWtGj2Jf_yyoKdA&usqp=CAU'
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    min: 100
  },
  description: {
    type: Sequelize.TEXT
  }
})


module.exports = Book

