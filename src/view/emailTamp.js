const express = require('express')
const router = express.Router()
const {emailTampFunc} = require("../controlar/emailTamp") 
router.post("/emailTamp",emailTampFunc)

module.exports = router