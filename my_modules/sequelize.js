const Sequelize = require('sequelize')
//read models
const EventsModel = require('./models/events')
const CurrentEventModel = require('./models/currentEvent')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'presenter.db',
    logging: false
})

const Events = EventsModel(sequelize, Sequelize)
const CurrentEvent = CurrentEventModel(sequelize, Sequelize)

sequelize
    .authenticate()
    .then(()=>{
        console.log('Connection to presenter.db established successfully')
    })
    .catch(err=>{
        console.log('Unable to connect to the database', err)
    })

sequelize.sync()

module.exports = {
    Events,
    CurrentEvent
}