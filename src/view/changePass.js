const express = require('express')
const Register = require("../modals/register");
const bcrypt = require("bcryptjs");
const router = express.Router()


router.post("/changePass", async (req, res) => {
    // Add your login logic here
    const { password, NewPass, ConPass } = req.body;

    try {

        const email = req.body.email;

        // Find user by username
        const user = await Register.findOne({email });
        console.log(user)
    
        // Verify user exists
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
    
        // Verify old password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ error: 'Incorrect old password' });
        }
    
        // Validate new password and confirm password
        if (NewPass !== ConPass) {
          return res.status(400).json({ error: 'New password and confirm password do not match' });
        }
    
        // Hash the new password
        const hashedPassword = await bcrypt.hash(NewPass, 10);
    
        // Update user's password
        user.password = hashedPassword;
        await user.save();
    
        // Send success response
        res.status(200).json({ message: 'Password changed successfully' });
      } catch (error) {
        console.error('Error changing password:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
 
 
});

module.exports = router