const mongoose = require('mongoose');


const CreateTeamSchema = mongoose.Schema({
    TeamName: { type: String, required: true },
    Eadress: { type: String, required: true }, 
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date,default: Date.now }  
});
  
module.exports = mongoose.model('CreateTeamData', CreateTeamSchema);