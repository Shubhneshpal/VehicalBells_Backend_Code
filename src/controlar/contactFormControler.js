const contactFormSchema = require("../modals/contactform");
const contactFormFunc = async (req, res) => {
    console.log("Received request:", req.body);
    try {
      const contactFormUser = new contactFormSchema({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        massage: req.body.massage,        
      }); 
     
  

  
      const contactform = await contactFormUser.save();
      console.log("contactform",contactform)
      res.status(201).json({ message: "contact form save successfully", data: contactform });
    } catch (error) {
      
     console.log("contact form error", error)
    }
  }

  module.exports={
    contactFormFunc
}