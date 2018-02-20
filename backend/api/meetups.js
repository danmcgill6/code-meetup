const express = require('express');
const router = express.Router();
const  meetup  = require('../db/models/meetup');
const Promise = require('bluebird')
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCvaIfWd-OuN9oFNCRTuUTbInrnllrw4ao'
})

router.get('/', (req, res, next) =>{
    meetup.findAll()
    .then((results)=>{
      console.log(results)
      let objArr = []
      results.forEach(val => {
          let obj = {}
          console.log(val.time)
          obj.coords = {lat:val.lat, lng:val.lng}
          obj.description = val.description
          obj.address = val.getAdress()
          obj.createdBy = val.getName()
          obj.date = new Date(val.date).toDateString()
          obj.time = val.time
   
          // obj.language = results[i].language
          obj.numberGoing = val.numberGoing
          //console.log(obj)
          objArr.push(obj)
      });
      return objArr
   })
      .then((final)=>{
        res.type('json')
        res.json(final)
      })
    })


    router.post('/',(req,res) => {
        promisifiedGeocode({address: req.body.street + ' ' + req.body.city + ' ' + req.body.state})
        .then((coords)=>{
          console.log(coords.json.results[0].geometry)
          req.body.lat  = coords.json.results[0].geometry.location.lat
          req.body.lng = coords.json.results[0].geometry.location.lng
          meetup.create(req.body)
            .then(()=>{
            res.redirect('/')
         })
        })
      
      
      })

    module.exports = router