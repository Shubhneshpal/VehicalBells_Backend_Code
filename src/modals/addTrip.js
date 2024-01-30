const mongoose = require('mongoose');


const addTripSchema = mongoose.Schema({
    sDate: { type: String, required: true },
    eDate: { type: String, required: true },
    Tfrom: { type: String, required: true },
    Tend: { type: String,unique:true, required: true },
    Cvehicle: { type: String, required: true },
    Ttpye: { type: String, required: true },
    Note: { type: String, required: true },
    Tag: { type: String, required: true },
});
  
module.exports = mongoose.model('addTrip', addTripSchema);