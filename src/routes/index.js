const express = require('express');
const router = express.Router();
const model = require('../model/cities')();

router.get('/', (req,res)=>{
    model.find({},(error,data)=>{
        if(error){
            throw error;
        }else{
            res.render('index',{cities: data});
        }
    })
   
});

router.post('/update',(req,res)=>{
    let query = { _id: req.params.id };
    let newvalue = { $set: { population: req.params.newPopulation } };
    model.updateOne(query, newvalue, (error, city)=> {
        if(error){
            throw error;
        }
        res.redirect('/');
    });
});

router.get('/delete/:id',(req,res)=>{
    let id = req.params.id;
    model.remove({_id: id},(error,city)=>{
        if(error){
            throw error;
        }else{
            console.log(city.name+" removed");
        }
        res.redirect('/');
    });
});

router.post('/add',(req,res)=>{
    let cap = (req.body.capital=='on')?true:false;
    
    let newcity = {
        name: req.body.name,
        population: req.body.population,
        country: req.body.country,
        region: req.body.region,
        isCapital: cap
    };
    model.create(newcity, (error,city)=>{
        if(error){
            throw error;
        }else{
            city.save();
        }
        res.redirect('/');
    });
});

module.exports = router;