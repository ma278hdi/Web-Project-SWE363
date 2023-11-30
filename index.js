const express = require('express')
const mongoose = require('mongoose')
const app = express()
const url = 'mongodb+srv://ma277:swe363Project@cluster0.jfdl3kd.mongodb.net/?retryWrites=true&w=majority'

async function connect(){
    try{
        await mongoose.connect(url);
        console.log("well done")
    }catch(err){
        console.log("No problem")
    }
    
}


connect()

app.listen(3000,()=>{
    console.log("server Is established")
})