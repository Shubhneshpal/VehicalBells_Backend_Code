const express = require('express')
const router = express.Router()
const {attnedanceFunc} = require("../controlar/markAttendance") 
router.post("/markAttendance",attnedanceFunc)

module.exports = router