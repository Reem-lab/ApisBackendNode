const express = require('express')
const path =require('path' )
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const User = require('./models/users')
const users = require('./Routes/users')
const vendors = require('./Routes/vendors')
const products = require('./Routes/products')

const app = express();

mongoose.connect('mongodb://localhost:27017/login-api-db')
    .then(()=> console.log ('connected to mongoDB...'))
   // .catch(err => console.error('could not connect to mongodb ....', err ))
  
//middleware  to response with json form 
app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({ extended: false }));

//understand it 
app.use ('/',express.static(path.join(__dirname, 'static')))

const port = process.env.port || 3000 ;
app.listen(port,()=> {
    console.log(`server up to ${port}`)
   

})
