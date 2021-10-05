const { string } = require('joi')
const mongoose = require('mongoose')


const VendorSchema = new mongoose.Schema (
    {
         name : {
             type : String ,
             required : true ,
             unique :true
         },
         phoneNumber : {
             type :String ,
             required :true,
             minlength:5 , 
             maxlength : 50
         },
         userName :{
            type : mongoose.Types.ObjectId ,
            required :true ,
            ref :'UserSchema'
        }
        
              
        }    
) 

 const model = mongoose.model('VendorSchema',VendorSchema)

 module.exports = model