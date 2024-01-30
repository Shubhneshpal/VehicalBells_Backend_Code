const addTripSchema = require("../modals/addTrip");
const addTripFunc = async (req, res) => {
    console.log("Received request:", req.body);
    try {
      const addTripUser = new addTripSchema({
        sDate: req.body.sDate,
        eDate: req.body.eDate,
        Tfrom: req.body.Tfrom,
        Tend: req.body.Tend,
        Cvehicle: req.body.Cvehicle,
        Ttpye: req.body.Ttpye,
        Note: req.body.Note,
        Tag: req.body.Tag,
      });  
  
      const addtrip = await addTripUser.save();
      console.log("addtrip",addtrip)
      res.status(201).json({ message: " addTrip information save successfully", data: addtrip });
    } catch (error) {
      
     console.log("error", error)
    }
  }

  module.exports={
    addTripFunc
}