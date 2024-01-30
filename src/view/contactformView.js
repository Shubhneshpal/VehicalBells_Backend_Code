const express = require('express')
const router = express.Router()
const {contactFormFunc} = require("../controlar/contactFormControler") 
router.post("/contactFormData",contactFormFunc)

module.exports = router