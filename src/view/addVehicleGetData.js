
const express = require('express');
const router = express.Router(); 
const {addVehicleControler} = require("../controlar/AddVehicleGetControler")

router.get('/GetvehiclesData', addVehicleControler);

module.exports = router;