const express = require('express')
const router = require('express').Router()

router.get('/', function(req, res, next){
    res.send('index page')
})

router.get('/daco', function(req, res, next){
    res.send('daco tu je')
})

module.exports = router