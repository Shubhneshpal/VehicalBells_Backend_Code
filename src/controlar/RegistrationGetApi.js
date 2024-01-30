const RegistrationFormSchema = require("../modals/register")
const RegistrationControler = async (req, res) => {
    try {
      const data = await RegistrationFormSchema.find();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  module.exports={
    RegistrationControler
}