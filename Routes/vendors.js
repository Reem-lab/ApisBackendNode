 const vendors = require('../controller/vendors')
 const vendor = require('../models/vendors')
 const express = require('express')
 const router = express.Router();
 const app = express();
 const joi = require('joi')


 router.get('/', vendors.getVendor)
 router.post('/', vendors.postVendor)
 router.put('/:id', vendors.putVendor)
 router.delete('/:id' ,vendors.deleteVendor)
 router.get('/:id', vendors.getVendorByid)
 function validateVendor(vendor) {}

 module.exports = router
 


 






