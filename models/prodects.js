const mongoose = require('mongoose');




const products= new mongoose.Schema({
    brand:{type:String,required:true},
    details:{type:String,required:true},
    details1:{type:String,required:true},
    image:{type:String,required:true},
    rating:{type:String,required:false},
    price:{type:String,required:true},
    about:{type:String,required:false},
    ingredients:{type:String,required:false}


    
})
const Products=mongoose.model("products",products)


module.exports=Products