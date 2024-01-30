const express = require('express');
const router = express.Router();
const {markAttendanceController } = require('../../controlar/DeleteApi/markAttendanceD');

router.delete('/attendanceDeleteData/:id', markAttendanceController);
module.exports = router;