const express = require('express')
const app = express()
const opn = require('opn')
const port = 3000

const {} = require('./my_modules/sequelize')

app.set('view engine', 'pug')
app.set('views', './views')

var indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.listen(port, function(){
    console.log('App listening on port 3000')
})

//opn('http://localhost:3000')