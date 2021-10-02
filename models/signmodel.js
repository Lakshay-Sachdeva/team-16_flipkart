const mongoose = require('mongoose');

// step 1 :- create the schema for user
const sinup = new mongoose.Schema({
   
   name: {type: String, required:false},
  number:{type:Number,required:false},
    email: {type: String, required: true},
    password:{type:String,required:true}
   
})

// step 2 :- connect the schema to the users collection
const Sinup = mongoose.model("sinup", sinup); // users

module.exports =Sinup;