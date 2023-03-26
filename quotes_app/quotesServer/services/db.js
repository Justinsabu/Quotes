
const mongoose =require('mongoose')

mongoose.connect('mongodb://localhost:27017/quote')

const Quote=mongoose.model('Quote',{

    id:String,
    content:String,
    author:String,

})

module.exports={
    Quote
}
