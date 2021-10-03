const express = require('express');

const User= require("../models/signmodel")
const Product=require("../models/prodects")



const router = express.Router();

router.post("/login",async(req,res)=>{
 var emaill=req.body.email
 var pass=req.body.password
   const data= await User.findOne({email:emaill})
   const product= await Product.find({})
   //console.log(data)
    if(pass===data.password){
res.render("delary",{product:product})
 //console.log("a")
    }   
    else{
       res.send ("wrong password")
    }
   

});
router.get("/login", async function (req,res) {
 //console.log(req.body)
    
    res.status(201).render("login")
    
})



// get all posts of a user

module.exports = router;