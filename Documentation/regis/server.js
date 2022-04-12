const express = require('express')
//(1) express
const mongoose = require('mongoose')
const cors = require('cors')
//(2) cors//
const UserController = require('./controllers/UserController')
const res = require('express/lib/response')
const req = require('express/lib/request')
const app = express()
const PORT = process.env.PORT || 8001
//(3) .env//
app.use(cors())
app.use(express.json())

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
//(4) config//
try{
    mongoose.connect(process.env.MONGO_DB_SECRET,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
        /*(5) useNewUrlParser: true,
        useUnifiedTopology: true*/
    console.log('MongoDb Connected Successfully!')
} catch(error){
    console.log(error)
}


app.get('/',(req,res)=>{
    res.send('Hello from node.Js app \n')
})
//(6) get //
app.get('/register',(req,res)=>{
    res.send('Welcome to Register \n')
})

app.post('/register',UserController.store)
//(7) post
app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
})
//(8 listen) //