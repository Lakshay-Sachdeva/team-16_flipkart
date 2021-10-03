const express= require("express")
const mongoose=require("mongoose")


const app=express()
app.use(express.json())
//conneting data base
const connect=()=>{
    return mongoose.connect("mongodb+srv://flipkartproject:flipkart@cluster0.fo2l4.mongodb.net/flipkart?retryWrites=true&w=majority")
}

app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
//app.use(express.static('public'))


//crud cronrolls




const product=require("./crud_controls/crudproducts")


const User=require("./crud_controls/sinupcrud")

const login=require("./crud_controls/logincrud")
const crudcart=require("./crud_controls/crudcart")
app.use("/products",product)
app.use("/cart",crudcart)
app.use("",User)
app.use("",login)







app.listen("2233",async()=>{
    await connect()
    console.log("jaswant")
})