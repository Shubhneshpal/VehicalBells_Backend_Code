const mongoose = require('mongoose');


const contactFormSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    massage: { type: String,required: true },
});


  
  module.exports = mongoose.model('contactForm', contactFormSchema);