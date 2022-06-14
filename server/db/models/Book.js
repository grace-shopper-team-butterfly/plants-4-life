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
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7L3wF7n8RofIc0WkSQOiZU6M5zATh7kYbZw&usqp=CAU'
    },
    price: {
        type: Sequelize.DECIMAL(15,6),
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    }
  }) 

  module.exports = Book

