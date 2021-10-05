const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema (
    {
     
         name : {
             type : String ,
             required : true ,
             unique :true
         },
         price :{
             type : Number ,
             required : true ,
         },
         provenance : {
             type :String ,
             required :true 
         },
         company_name : {
            type : String ,
            required : true
        },
        vendorName :{
            type : mongoose.Types.ObjectId ,
            required :true ,
            ref :'VendorSchema'
        }

            
    }
) 

 const model = mongoose.model(' ProductSchema', ProductSchema)

 module.exports = model