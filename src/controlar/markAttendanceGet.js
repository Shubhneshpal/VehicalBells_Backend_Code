const attendanceShema = require("../modals/markAttendance")
const attendanceControler = async (req, res) => {
    try {
      const data = await attendanceShema.find();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  module.exports={
    attendanceControler
}