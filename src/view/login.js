const express = require('express')
const Register = require("../modals/register");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const router = express.Router()
require('dotenv').config();

router.post("/login", async (req, res) => {
      // Add your login logic here
      const { email, password } = req.body;
      try {       
        const user = await Register.findOne({ email: email.trim() });
        const passwordsMatch = await bcrypt.compare(password.trim(), user.password);    
        if (user && passwordsMatch) {
          const token = jwt.sign({ userId: user._id },`${process.env.JWT_SECRET_KEY}`, {
            expiresIn: '1d',
          });        
    
          res.status(200).json({ message: 'Login successful', token });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
   
  })

module.exports = router