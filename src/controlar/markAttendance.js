const attendanceSchema = require("../modals/markAttendance");
const attnedanceFunc = async (req, res) => {
    console.log("Received request:", req.body);
    try {
      const TeamUser = new attendanceSchema({
        Cdate: req.body.Cdate,
        timeIn: req.body.timeIn,
        timeOut: req.body.timeOut    
      });     
      
      const atttnedance = await TeamUser.save();
      console.log("atttnedance",atttnedance)
      res.status(201).json({ message: " Team information save successfully", data: atttnedance });
    } catch (error) {      
     console.log("error", error)
    }
  }

  module.exports={
    attnedanceFunc
}