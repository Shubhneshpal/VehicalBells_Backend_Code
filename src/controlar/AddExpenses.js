const addExpensesSchema = require("../modals/addExpenses");
const addExpensesFunc = async (req, res) => {
    console.log("Received request:", req.body);
    try {
      const addExpensesUser = new addExpensesSchema({
        vType: req.body.vType,
        fpDate: req.body.fpDate,
        State: req.body.State,
        fType: req.body.fType,
        fprice: req.body.fprice,
        Trip: req.body.Trip,
        Distance: req.body.Distance,
        vAverage: req.body.vAverage,
        vRegistration: req.body.vRegistration,
        Notes: req.body.Notes,
      }); 
      
      
      const addexpenses = await addExpensesUser.save();
      console.log("addexpenses",addexpenses)
      res.status(201).json({ message: " addexpenses information save successfully", data: addexpenses });
    } catch (error) {
      
     console.log("error", error)
    }
  }

  module.exports={
    addExpensesFunc
}