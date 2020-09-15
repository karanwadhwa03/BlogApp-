const express=require('express');
const bodyParser=require('body-parser');
const path=require('path')
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/BlogDB', {useNewUrlParser: true,useUnifiedTopology: true});



const app=express();
const createRoutes=require('./routes/create')
const homeRoutes=require('./routes/home')




app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs');
app.use(homeRoutes)
app.use('/create',createRoutes)
app.use('/',(req,res)=>res.send('ERROR'))
app.listen(3000,()=>console.log("Server Started At 3000"))