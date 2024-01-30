const EmailTampSchema = require("../modals/emailTamp");
const emailTampFunc = async (req, res) => {
    console.log("Received request:", req.body);
    try {
      const TeamUser = new EmailTampSchema({
        Name: req.body.Name,
        EmailSub: req.body.EmailSub,
        content: req.body.content    
      });     
      
      const emailTamp = await TeamUser.save();
      console.log("createTeam",emailTamp)
      res.status(201).json({ message: " Team information save successfully", data: emailTamp });
    } catch (error) {      
     console.log("error", error)
    }
  }

  module.exports={
    emailTampFunc
}