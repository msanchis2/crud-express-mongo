const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://marti:marti@cluster0.jxysatv.mongodb.net/?retryWrites=true&w=majority').then(()=>console.log("connected"));

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
