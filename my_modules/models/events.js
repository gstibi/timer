const Sequelize = require('sequelize')

module.exports = (sequelize, type)=>{
    return sequelize.define('Events',{
        name:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.STRING
        },
        start:{
            type: Sequelize.DATE
        },
        end:{
            type: Sequelize.DATE
        },
        status:{
            type: Sequelize.STRING
        }
    },{
        freezeTableName: true
    })
}