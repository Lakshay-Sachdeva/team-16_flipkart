const express = require('express');

const User= require("../models/signmodel")




const router = express.Router();

router.post("/signup",async(req,res)=>{
    const signup= await User.create(req.body)
    res.status(201).render("signup",{signup})

} );
router.get("/signup", async function (req, res) {
    const users = await User.find()

    res.render('signup', {users});
})



// get all posts of a user

module.exports = router;