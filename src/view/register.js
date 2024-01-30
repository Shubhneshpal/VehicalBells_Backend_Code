const express = require('express')
const router = express.Router()
const {registerFunc} = require("../controlar/Register") 
router.post("/register",registerFunc)

module.exports = router