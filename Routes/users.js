const users = require('../controller/users')
const express = require('express')
const bcrypt = require('bcrypt');
const User = require('../models/users')
const jwt = require('jsonwebtoken');
const app = express();




app.post('/api/login', users.postUserLogin );
app.post('/api/register', users.postUserRegister ) 

module.exports = app 