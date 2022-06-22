const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/crud-cities').then(()=>console.log("connected"));

module.exports = function(){
    let City = Schema({
        name: String,
        population: Number,
        country: String,
        region: String,
        isCapital: Boolean
    });
    
    return mongoose.model('cities', City);
}