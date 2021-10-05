const product = require('../models/products')
const express = require('express')
const router = express.Router();
const joi = require('joi')



const products = [
    {   name: 'fan',price :80 , provenance :'egypt' , company_name: 'maxel' },  
    {   name: 'oil tanks ' ,price :50 , provenance :'egypt' , company_name: 'maximu' },  
    {   name: 'fridges' ,price :60 , provenance :'egypt' , company_name: 'copra'},  
  ];
  
exports.getProducts = (req, res)=>{
           products.find.then ((response)=>{
           console.log('products')
           return res.send(products) 
           })
  }

 exports.postProducts = (req, res) => {
   /*
    const { error } = validateProduct(req.body); 
    if (error) return res.status(400).send(error.details[0].message);*/
  
    const p = {
      name: req.body.name ,
      price : req.body.price ,
      provenance : req.body.provenance ,
      company_name : req.body.company_name
    };

    products.push(p);
    return res.send(p);
     /*
    product.create({
      name: req.body.name ,
      price : req.body.price ,
      provenance : req.body.provenance ,
      company_name : req.body.company_name,
      vendorName : _id 
    })*/
  
  };
  
  exports.putProducts = (req, res) => {
    const product =  product.findByIdAndRemove(req.params.id);
    if (!product) return res.status(404).send('The product with the given ID was not found.');
  
    /*
    const { error } = validateProduct(req.body); 
    if (error) return res.status(400).send(error.details[0].message);*/
    
    product.name = req.body.name; 
    return res.send(product);
  };
  
  exports.deleteProducts = (req, res) => {
    const product =  product.findByIdAndRemove(req.params.id);
    if (!product) return res.status(404).send('The product with the given ID was not found.');
  
    const index = products.indexOf(product);
    products.splice(index, 1);
  
    return res.send(product);
  };
  
  
  exports.getProductsByid = (req, res) => {
    const product =  product.findById(req.params.id);
    if (!product) return res.status(404).send('The product with the given ID was not found.');
    return res.send(product);
  };
  /*
  function validateProduct(product) {
    const schema = {
      name: joi.string().required(),
      price : joi.number().required(),
      provenance : joi.string().required(),
      company_name :joi.string().required()
    };
  
    return joi.validate(product, schema);
  }*/
 
