const Sequelize = require('sequelize')

module.exports = (sequelize, type)=>{
    return sequelize.define('Events',{
        name:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.STRING
        },
        hours:{
            type: Sequelize.INTEGER
        },
        minutes:{
            type: Sequelize.INTEGER
        }
    },{
        freezeTableName: true
    })
}