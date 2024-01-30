const express = require('express');
const router = express.Router(); 
const {addTripControler} = require("../controlar/AddTripGetapi")

router.get('/GetTripData', addTripControler);

module.exports = router;