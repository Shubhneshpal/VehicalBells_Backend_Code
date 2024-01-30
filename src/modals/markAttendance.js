const mongoose = require('mongoose');

const AttendanceSchema = mongoose.Schema({
    Cdate: { type: String, required: true },
    timeIn: { type: String, required: true },
    timeOut: { type: String, required: true },  
});
  
module.exports = mongoose.model('markAttendance', AttendanceSchema);