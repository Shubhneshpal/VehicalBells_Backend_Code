const addVehiclGeteShema = require("../modals/addVehicleSchema")
const addVehicleControler = async (req, res) => {
    try {
      const data = await addVehiclGeteShema.find();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  module.exports={
    addVehicleControler
}