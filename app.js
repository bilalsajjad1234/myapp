const express=require('express')
const app=express()
var bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const router = require('./router')
app.use(express.static('public'))
app.set('views','views')
app.set('view engine','ejs')
app.use('/',router)
app.use('/contact',router)
app.use('/about',router)




module.exports=app