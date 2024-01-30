const CreateTeamSchema = require("../../modals/CreateTeam")

const updateTeamController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await CreateTeamSchema.findByIdAndUpdate(id, {
            $set: {
                TeamName: req.body.TeamName,
                Eadress: req.body.Eadress,
                UpdateDate: Date.now(),
            },
        });
        if (result) {
            res.json({ message: 'Team updated successfully' });
        } else {
            res.status(404).json({ error: 'Team not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


module.exports = {    
    updateTeamController
};