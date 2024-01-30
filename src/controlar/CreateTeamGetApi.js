const CreateTeamSchema = require("../modals/CreateTeam")
const createTeamControler = async (req, res) => {
    try {
      const data = await CreateTeamSchema.find();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  module.exports={
    createTeamControler
}