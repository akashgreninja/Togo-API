const express = require("express");

const router = express.Router();

router.get("/get-photos",async(req,res)=>{
    try{

        const photos ={
            photos:[{
                id: 12441544,

            src:{
                original:"https://images.pexels.com/photos/12772076/pexels-photo-12772076.jpeg?auto=compress&cs=tinysrgb&h=350",
                medium:"https://images.pexels.com/photos/12772076/pexels-photo-12772076.jpeg?auto=compress&cs=tinysrgb&h=350"

            }
        }]

        }
        res.json(photos);
    }catch{

    }
})

module.exports=router