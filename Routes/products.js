const products = require('../controller/products')
const product = require('../models/products')
const express = require('express')
const router = express.Router();
const joi = require('joi')


router.get('/' ,products.getProducts);
router.post('/' , products.postProducts);
router.put('/:id',products.putProducts);
router.delete('/:id',products.deleteProducts);
router.get('/:id',products.getProductsByid);


function validateProduct(product){}

module.exports = router

