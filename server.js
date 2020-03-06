var express=require("express")
var session=require("express-session")
var path=require("path")
var dotenv=require("dotenv")
dotenv.config()
require("./db")
var hbs = require("hbs")
// var methodOverride=require("method-override")
var app=express()
var productNormalroute=require("./routes/productNormalroutes")
var userNormalroute=require("./routes/userNormalroutes")
var userApiroute=require("./routes/userApiroutes")
var productApiroute=require("./routes/productApiroutes")





var PORT=process.env.PORT || 5555
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("view engine","hbs")
app.set("view options",{layout:"layout"})
// app.use(methodOverride("logout"))
app.use(express.static(path.join(__dirname,"static")))
hbs.registerPartials(path.join(__dirname,"views","partials"))
app.use(
    session({
      secret: "todosAPIexpressappsecret",
      resave: false,
      name: "todoSession", 
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 30,
        httpOnly: true,
        secure: false,
        sameSite: "strict"
      }
    })
  );


  app.use(userApiroute)
  app.use(userNormalroute)
  app.use(productNormalroute)
  app.use(productApiroute)
  app.listen(PORT,function(){
    console.log(`session loading...on port ${PORT} `)
})