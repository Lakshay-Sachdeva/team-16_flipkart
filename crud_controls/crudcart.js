const express = require('express');



const Cart = require("../models/cart")
const router = express.Router();
router.get("",async(req,res)=>{
    const cart = await Cart.find({})
    res.render("cart",{cart:cart
   })
    
    });
router.post("",async(req,res)=>{ 
       const cart= await Cart.create(req.body)
    })
router.delete("",async(req,res)=>{
    console.log(id)
    const cart=await Cart.findByIdAndDelete(req.body.id)
})

module.exports=router