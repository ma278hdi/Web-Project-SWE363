const express = require('express')
const mongoose = require('mongoose')
const app = express()
const url = 'mongodb+srv://ma277:swe363Project@cluster0.jfdl3kd.mongodb.net/?retryWrites=true&w=majority'
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'ezmqKRZB04gz4tTiKV0g4QyrnV65QvOb',
  issuerBaseURL: 'https://dev-2ic2aq3xjsedp77w.us.auth0.com'
};

app.use(express.static("views"))

app.set("view engine", "ejs")
app.get('/', (req, res) => {
   res.render("Pages/mainPage")
  });
async function connect(){
    try{
        await mongoose.connect(url);
        console.log("well done")
    }catch(err){
        console.log("No problem")
    }
    
}


connect()

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.get('/Profile', (req, res) => {
    res.render("Pages/profile", {user: req.oidc.user,})
   });

app.listen(3000,()=>{
    console.log("server Is established")
})