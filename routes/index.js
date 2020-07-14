const express = require('express')
const router = require('express').Router()

router.get('/', function(req, res, next){
    res.render('index.pug')
})

router.get('/add-event-form', function(req,res,next){
    res.render('add-event-form.pug')
})

router.post('/add-event', function(req,res,next){
    console.log(req.body)
    res.send('ok')
})

module.exports = router