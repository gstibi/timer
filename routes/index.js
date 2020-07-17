const express = require('express')
const router = require('express').Router()
const {Events} = require('../my_modules/sequelize')

router.get('/', function(req, res, next){
    res.redirect('/director')
})

router.get('/director', function(req, res, next){
    Events.findAll({
        raw: true,
        attributes:['id', 'name', 'description', 'start', 'end', 'status']
    }).then(data => {
        //rewrites timestams to HH:MM
        data.forEach(element => {
            startDate = new Date(element.start)
            startDateHours = (startDate.getHours() < 10?'0':'') + startDate.getHours()
            startDateMinutes = (startDate.getMinutes() < 10?'0':'') + startDate.getMinutes()
            element.start = '' + startDateHours + ':' + startDateMinutes

            endDate = new Date(element.end)
            endDateHours = (endDate.getHours() < 10?'0':'') + endDate.getHours()
            endDateMinutes = (endDate.getMinutes() < 10?'0':'') + endDate.getMinutes()
            element.end = '' + endDateHours + ':' + endDateMinutes
        });

        res.render('index.pug', {data: data})
    })
})

router.get('/add-event-form', function(req,res,next){
    res.render('add-event-form.pug')
})

router.post('/add-event', function(req,res,next){

    //prepare date object with start and end time
    dateStart = req.body.dateStart + ' ' + req.body.timeStart
    dateStart = new Date(dateStart)
    dateEnd = req.body.dateStart + ' ' + req.body.timeEnd
    dateEnd = new Date(dateStart)
    Events.create({name: req.body.name, description: req.body.description, start: dateStart, end: dateEnd})
    res.redirect('/director')
})

module.exports = router