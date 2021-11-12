const mongoose = require('mongoose');




const products= new mongoose.Schema({
    brand:{type:String,required:false},
    details:{type:String,required:false},
    details1:{type:String,required:false},
    image:{type:String,required:false},
    rating:{type:String,required:false},
    price:{type:String,required:false},
    about:{type:String,required:false},
    ingredients:{type:String,required:false}


})
const Cart=mongoose.model("cart",products)


module.exports=Cart