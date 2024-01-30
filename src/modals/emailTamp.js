const mongoose = require('mongoose');


const EmailTampSchema = mongoose.Schema({
    Name: { type: String, required: true },
    EmailSub: { type: String, required: true },   
    content: { type: String, required: true },   
});
  
module.exports = mongoose.model('emailTampletData', EmailTampSchema);