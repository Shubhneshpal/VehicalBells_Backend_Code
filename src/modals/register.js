const mongoose = require('mongoose');
const validator = require("validator")


// const keysecret = process.env.SECRET_KEY

const registerSchema = mongoose.Schema({
  name: { type: String, required: true },
  lname: { type: String, required: true },
  Cname: { type: String, required: true },
  email: { type: String,unique:true, required: true, 
    validate(value) {
      if (!validator.isEmail(value)) {
          throw new Error("not valid email")
      }
  }},
  password: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('register', registerSchema);