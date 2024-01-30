const mongoose = require('mongoose');


const addExpensesSchema = mongoose.Schema({
    vType: { type: String, required: true },
    fpDate: { type: String, required: true },
    State: { type: String, required: true },
    fType: { type: String,unique:true, required: true },
    fprice: { type: String, required: true },
    Trip: { type: String, required: true },
    Distance: { type: String, required: true },
    vAverage: { type: String, required: true },
    vRegistration: { type: String, required: true },
    Notes: { type: String, required: true },
});
  
module.exports = mongoose.model('addExpenses', addExpensesSchema);

