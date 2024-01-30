const express = require('express');
const router = express.Router();
const {updateTeamController } = require("../../controlar/PATCHapi/CreateTeamP");

// PATCH route to update a team by ID
router.patch('/TeamUpdateDatas/:id', updateTeamController);

module.exports = router;