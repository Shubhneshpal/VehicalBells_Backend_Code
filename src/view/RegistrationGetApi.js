const express = require('express');
const router = express.Router(); 
const {RegistrationControler} = require("../controlar/RegistrationGetApi")

router.get('/RegistrationGetData', RegistrationControler);

module.exports = router;