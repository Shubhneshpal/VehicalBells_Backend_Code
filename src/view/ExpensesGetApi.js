const express = require('express');
const router = express.Router(); 
const {addExpensesControler} = require("../controlar/ExpensesGetApi")

router.get('/GetExpensesData', addExpensesControler);

module.exports = router;