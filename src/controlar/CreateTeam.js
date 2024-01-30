const createTeamSchema = require("../modals/CreateTeam");
const createTeamFunc = async (req, res) => {
    console.log("Received request:", req.body);
    try {
      const TeamUser = new createTeamSchema({
        TeamName: req.body.TeamName,
        Eadress: req.body.Eadress,
    
      });      
      
      const createTeam = await TeamUser.save();
      console.log("createTeam",createTeam)
      res.status(201).json({ message: " Team information save successfully", data: createTeam });
    } catch (error) {
      
     console.log("error", error)
    }
  }

  module.exports={
    createTeamFunc
}