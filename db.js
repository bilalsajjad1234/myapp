const {MongoClient} = require("mongodb")
const connectionString="mongodb+srv://user:1234@987@cluster0.1olct.mongodb.net/complexapp?retryWrites=true&w=majority"
MongoClient.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false,useCreateIndex:true},function(err,client){
    module.exports=client.db()
    const app=require('./app')
    app.listen(3000)
})

