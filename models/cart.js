const mongoose = require('mongoose');




const products= new mongoose.Schema({
    brand:{type:String,required:true},
    image:{type:String,required:true},
    rating:{type:String,required:false},
    rom:{type:String,required:true},
    camera:{type:String,required:true},
    battry:{type:String,required:true},
    procesor:{type:String,required:true},
    warrenty:{type:String,required:true},
    price:{type:String,required:true}
    

})
const Cart=mongoose.model("cart",products)


module.exports=Cart