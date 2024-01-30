const express = require('express');
const router = express.Router();
const {createTeamController } = require('../../controlar/DeleteApi/CreateTeameDe');

router.delete('/TeamDeleteData/:id', createTeamController);
module.exports = router;