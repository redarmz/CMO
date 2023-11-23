const { Sequelize, DataTypes } = require('sequelize')
const RestaurantModel = require('../models/restaurant')
const restaurants = require('./mock-restaurant')


 const sequelize = new Sequelize('listRestos', 'username', 'password', {
    host: '192.168.64.2',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: true
  })
  

const Restaurant = RestaurantModel(sequelize, DataTypes)

const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    restaurants.map(restaurant => {
        Restaurant.create({
          name: restaurant.name,
          picture: restaurant.picture,
        }).then(kfc => console.log(kfc.toJSON()))
    })

    console.log('La base de donnée a bien été initialisée !')
  })
}

module.exports = { 
  initDb, Restaurant //, User
}