const express = require('express');
const router = express.Router(); 
const {attendanceControler} = require("../controlar/markAttendanceGet")

router.get('/GetAttendanceData', attendanceControler);

module.exports = router;