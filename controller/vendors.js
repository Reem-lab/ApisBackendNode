const vendor = require('../models/vendors')
const express = require('express')
const router = express.Router();
const app = express();
const joi = require('joi')


const vendors = [
    {  name: 'Ahmed',phoneNumber: 0125455555  },  
    {  name: 'hasan' , phoneNumber: 0125452536 },  
    {  name: 'salim' , phoneNumber: 0125457777 },
  ];
  
  exports.getVendor =(req, res) => {
    return res.send(vendors);
  };
  
  exports.postVendor = (req, res) => {
    /*
   const { error } = validateVendor(req.body); 
   if (error) return res.status(400).send(error.details[0].message);*/
  
    const vendor = {
      name: req.body.name ,
      phoneNumber : req.body.phoneNumber ,
      userName :_id 
    };
    vendors.push(vendor)
     return res.send(vendor)
  };
  exports.putVendor = (req, res) => {
    const vendor =  vendor.findByIdAndRemove(req.params.id);
    if (!vendor) return res.status(404).send('The vendor with the given ID was not found.');
  /*
    const { error } = validateVendor(req.body); 
    if (error) return res.status(400).send(error.details[0].message);*/
    
    vendor.name = req.body.name; 
    return res.send(vendor);
  };
  
  exports.deleteVendor = (req, res) => {
    const vendor =  vendor.findByIdAndRemove(req.params.id);
    if (!vendor) return res.status(404).send('The vendor with the given ID was not found.');
  
    const index = vendors.indexOf(vendor);
    vendors.splice(index, 1);
  
     return res.send(vendor);
  };
  
   exports.getVendorByid = (req, res) => {
    const vendor =  vendor.findById(req.params.id);
    if (!vendor) return res.status(404).send('The vendor with the given ID was not found.');
    return res.send(vendor);
  };
  /*
  function validateVendor(vendor) {
    const schema = {
      name: joi.string().required(),
      id : joi.number().required(),
      phoneNumber : joi.string().min(5).max(50)
    };
  
    return joi.validate(vendor, schema);
  }*/
  
  

  
