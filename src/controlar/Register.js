const Register = require("../modals/register");
const bcrypt = require("bcryptjs");
const registerFunc = async (req, res) => {
    // console.log("Received request:", req.body);

    const { name, lname, Cname, email,password } = req.body;

    if (!name || !lname || !Cname || !email || !password) {
        res.status(422).json({ error: "fill all the details" })
    }    

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new Register({ email, password: hashedPassword, Cname, name, lname });
      await user.save();
  
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }   
  }

  module.exports={
    registerFunc
}