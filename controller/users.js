const express = require('express')
const bcrypt = require('bcrypt');
const User = require('../models/users')
const jwt = require('jsonwebtoken');
const app = express();


//super important
const  JWT_SECRET = 'kdkfnvdjnsjkndwqhjdbqwuhdbnwk4490902()@##$$dwa783668434763673'


//login authorization :
exports.postUserLogin = async(req,res)=>{
        
    //evaluate if username  and password is correct before passing into json token 
    const {username ,password } = req.body

    // to be sure that one user will pass
    //lean to return very json simple object representation of the object instead of fancy mongoose method 
    const user = User.findOne({username,password}).lean

     if(!user){
       return res.json({status :'error' , error: 'invalid username or password '})
     }


    if( await bcrypt.compare(password , user.password)){
       //the username and password combination successful 
        
       // id and user not imporatant and visible to other 
       const token = jwt.sign({
         id :user._id ,
         username : user.username 
       },
        JWT_SECRET ) //important key !!

       return res.json({status : 'ok' , data : token })
    }

    res.json({status : 'error' , error: 'invalid username or password '})

}

//sign up authontication :
exports.postUserRegister = async (req,res) => {

    //this is to hash the password because it is wrong to be shown to other must understand it
    const {username , password : plaintTextPassword } = req.body
     
    //check if username condition is ok
    if(!username || typeof username !== 'string'){
      return res.json({status : error , error : 'invalid usernname !! '})
    }
     //check if password condition is ok
    if(!plaintTextPassword || typeof  plaintTextPassword !== 'string'){
     return res.json({status : error , error : 'invalid password !! '})
   }
   //another validate to password 
   if(plaintTextPassword.length < 5){
     return res.json({status : error , error : 'password must be at least 6 character !! '})
   }

    //hashing the password to not be known 
    const password = await bcrypt.hash( password , 10 )

     //here we create a new recorde in database users 
    try {
        // by create function we crate a new record 
           const response = User.create({
            username,
               password
           })
           //if it is done return this ..
           console.log('User created successfully ', response )
    } catch (error) {
        //11000 duplicate key error 
          if(error=== 11000){
        //return the error if repeat because it must be unique !
         return res.json({status : 'error' , error : 'username already in use '})
          }
          // un specific error happend 
            throw error 

    }

    //return the result in json form status ok 
    res.json({status : 'ok'})
} 


