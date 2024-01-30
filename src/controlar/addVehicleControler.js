const addVehicleSchema = require("../modals/addVehicleSchema");
const addVehicleFunc = async (req, res) => {
    console.log("Received request:", req.body);
    try {
      const addVehicleUser = new addVehicleSchema({
        vType: req.body.vType,
        MCompany: req.body.MCompany,
        fType: req.body.fType,
        Modal: req.body.Modal,
        VRegistration: req.body.VRegistration,
        Avrage: req.body.Avrage,
        OReading: req.body.OReading,
      }); 
     
  

  
      const addvehicle = await addVehicleUser.save();
      console.log("addvehicle",addvehicle)
      res.status(201).json({ message: " addVehicle information successfully", data: addvehicle });
    } catch (error) {
      
     console.log("error", error)
    }
  }

  module.exports={
    addVehicleFunc
}