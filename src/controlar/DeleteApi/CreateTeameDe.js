const CreateTeamSchema = require("../../modals/CreateTeam");

const createTeamController = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await CreateTeamSchema.findByIdAndDelete(id);
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
    createTeamController
}