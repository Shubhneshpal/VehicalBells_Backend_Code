const express = require('express');
const router = express.Router(); 
const {createTeamControler} = require("../controlar/CreateTeamGetApi")

router.get('/TeamGetData', createTeamControler);

module.exports = router;