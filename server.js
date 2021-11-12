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




const home=require("./crud_controls/crudhome.js")
const makeup=require("./crud_controls/crudproducts")
const product=require("./crud_controls/crudproducts")
 const pay=require("./crud_controls/crudpayment")
const User=require("./crud_controls/sinupcrud")
const details=require("./crud_controls/del")
const login=require("./crud_controls/logincrud")
const crudcart=require("./crud_controls/crudcart")
app.use("/makeup",makeup)

app.use("/home",home)
app.use("/cart",crudcart)
app.use("",User)
app.use("",login)
app.use("/delivery",details)

 app.use("/payment",pay)





app.listen("2233",async()=>{
    //http://localhost:2233/home
    await connect()
    console.log("jaswant")
})