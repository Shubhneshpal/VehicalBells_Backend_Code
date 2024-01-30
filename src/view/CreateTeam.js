const express = require('express')
const router = express.Router()
const {createTeamFunc} = require("../controlar/CreateTeam") 
router.post("/TeamData",createTeamFunc)

module.exports = router