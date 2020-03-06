var mongooose=require("mongoose")
mongooose.connect("mongodb://127.0.0.1:27017/eCommerce",{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(function(){
    console.log("Database connected successfully")
}).catch(function(err){
    console.log(err.message)
})