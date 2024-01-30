const markAttendanceSchema = require("../../modals/markAttendance");

const markAttendanceController = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await markAttendanceSchema.findByIdAndDelete(id);
      if (result) {
        res.json({ message: 'Data deleted successfully' });
      } else {
        res.status(404).json({ error: 'Data not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  module.exports={
    markAttendanceController
}