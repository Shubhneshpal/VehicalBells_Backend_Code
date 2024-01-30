const express = require('express')
const router = express.Router()
const {addTripFunc} = require("../controlar/addTrip") 
router.post("/addTripData",addTripFunc)

module.exports = router