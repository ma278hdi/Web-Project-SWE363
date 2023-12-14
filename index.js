const express = require('express')
const mongoose = require('mongoose')
const app = express()
const url = 'mongodb+srv://ma277:swe363Project@cluster0.jfdl3kd.mongodb.net/?retryWrites=true&w=majority'
const { auth } = require('express-openid-connect');
const path = require('path')


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'ezmqKRZB04gz4tTiKV0g4QyrnV65QvOb',
  issuerBaseURL: 'https://dev-2ic2aq3xjsedp77w.us.auth0.com'
};


app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views', 'Pages'))



app.get('/', (req, res) => {
    res.render("mainPage")
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
app.use(express.static(path.join(__dirname, 'views')));




app.get ('/mainPage', function (req, res) {
    res.locals.user = req.oidc.user;
    res.render("mainPage")
    res.render("mainPage", {user: req.oidc.user,})

});

app.get ('/profile', function (req, res) {
    res.locals.user = req.oidc.user;
    res.render("profile")
    res.render("profile", {user: req.oidc.user,})

});


app.get ('/BLGame', function (req, res) {
    res.sendFile (path.join (__dirname, 'views', 'Pages', 'BLGame.html'), {user: req.oidc.user});
  });


app.get ('/BQGame', function (req, res) {
    res.sendFile (path.join (__dirname, 'views', 'Pages', 'BQGame.html'), {user: req.oidc.user});
  });


app.get ('/Login', function (req, res) {
    res.sendFile (path.join (__dirname, 'views', 'Pages', 'Login.html'), {user: req.oidc.user});
  });

app.get ('/LogOut', function (req, res) {
    res.sendFile (path.join (__dirname, 'views', 'Pages', 'LogOut.html'), {user: req.oidc.user});
  });


app.get ('/Q_game', function (req, res) {
    res.sendFile (path.join (__dirname, 'views', 'Pages', 'Q_game.html'), {user: req.oidc.user});
  });

  app.get ('/L_game', function (req, res) {
    res.sendFile (path.join (__dirname, 'views', 'Pages', 'L_game.html'), {user: req.oidc.user});
  });
  








app.listen(3000,()=>{
    console.log("server Is established")
})