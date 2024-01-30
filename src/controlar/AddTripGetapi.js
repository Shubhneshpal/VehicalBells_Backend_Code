const addtripGeteShema = require("../modals/addTrip")
const addTripControler = async (req, res) => {
    try {
      const data = await addtripGeteShema.find();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  module.exports={
    addTripControler
}