const express = require('express')
const router = express.Router()
const {addVehicleFunc} = require("../controlar/addVehicleControler") 
router.post("/addVehicleData",addVehicleFunc)

module.exports = router