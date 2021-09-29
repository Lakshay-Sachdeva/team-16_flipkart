const express= require("express")
const mongoose=require("mongoose")

const app=express()
app.use(express.json())
//conneting data base

const connect=()=>{
    return mongoose.connect("mongodb+srv://flipkartproject:flipkart@cluster0.fo2l4.mongodb.net/flipkart?retryWrites=true&w=majority")
}
//

app.use(express.urlencoded());



//model or schema data
app.set('view engine', 'ejs');
app.use(express.static('public'))
const products= new mongoose.Schema({
    brand:{type:String,required:true},
    iage:{type:String,required:true},
    rating:{type:String,required:false},
    rom:{type:String,required:true},
    camera:{type:String,required:true},
    battry:{type:String,required:true},
    procesor:{type:String,required:true},
    warrenty:{type:String,required:true},
    price:{type:String,required:true}


    
})
const Products=mongoose.model("products",products)



//products controllers
app.get("/products",async(req,res)=>{
    const product = await Products.find({})
    res.render("index",{product:product,
    image:product.iage})
    
    })
app.post("/products",async(req,res)=>{
    const product = await Products.create(req.body)
    res.status(201).send({product})
    })
app.patch("/products",async(req,res)=>{
    const product = await Products.findByIdAndUpdate(req.body)
    res.status(201).send({product})
    })
app.delete("/products",async(req,res)=>{
    const product = await Products.findByIdAndUpdate(req.body)
    res.status(201).send({product})
    })








app.listen("2233",async()=>{
    await connect()
    console.log("jaswant")
})