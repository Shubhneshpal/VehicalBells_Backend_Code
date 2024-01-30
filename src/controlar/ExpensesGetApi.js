const addExpensesGeteSchema = require("../modals/addExpenses")
const addExpensesControler = async (req, res) => {
    try {
      const data = await addExpensesGeteSchema.find();
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  module.exports={
    addExpensesControler
}