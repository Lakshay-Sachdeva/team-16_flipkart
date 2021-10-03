const express = require('express');
const Cart = require("../models/cart")
const Products = require("../models/prodects")
const router = express.Router();
router.get("",async(req,res)=>{
    const product = await Products.find({})
    res.render("payment",{product:product,
    image:product.iage})
    
    })
// router.post("",async(req,res)=>{
//     const p= await Cart.create(req.body)
//     res.send({p})
//     })
router.patch("",async(req,res)=>{
    const product = await Products.findByIdAndUpdate(req.body)
    res.status(201).send({product})

    })
router.delete("/",async(req,res)=>{
    const product = await Products.findByIdAndUpdate(req.body)
    res.status(201).send({product})
    })





module.exports=router