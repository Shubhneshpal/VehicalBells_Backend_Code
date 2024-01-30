const mongoose = require('mongoose');


const addVehiclepageSchema = mongoose.Schema({
  vType: { type: String, required: true },
  MCompany: { type: String, required: true },
  fType: { type: String, required: true },
  Modal: { type: String,unique:true, required: true },
  VRegistration: { type: String, required: true },
  Avrage: { type: String, required: true },
  OReading: { type: String, required: true },
});



  
  module.exports = mongoose.model('addVehicle', addVehiclepageSchema);