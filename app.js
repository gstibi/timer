const express = require('express')
const app = express()
const path = require('path')
const sqlite = require('sqlite3')
const opn = require('opn')
const port = 3000

const {} = require('./my_modules/sequelize')

app.set('view engine', 'pug')
// templates
app.set('views', path.join(__dirname, 'views'));
// public files
app.use(express.static(path.join(__dirname, 'public')));
// installed packages
app.use(express.static(path.join(__dirname, 'node_modules')));

var indexRouter = require('./routes/index')

app.use('/', indexRouter)

app.listen(port, function(){
    console.log('App listening on port 3000')
})

opn('http://localhost:3000')