const express = require('express');
const Cart = require("../models/cart")
const Products = require("../models/prodects")
const router = express.Router();
router.get("",async(req,res)=>{
    const product = await Products.find({})
    res.render("home",{product:product,
    image:product.iage})
    
    })

module.exports=router
