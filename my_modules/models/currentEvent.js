const Sequelize = require('sequelize')

module.exports = (sequelize, type)=>{
    return sequelize.define('CurrentEvent',{
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
        },
        start:{
            type: Sequelize.DATE
        },
        end:{
            type: Sequelize.DATE
        }
    },{
        freezeTableName: true
    })
}