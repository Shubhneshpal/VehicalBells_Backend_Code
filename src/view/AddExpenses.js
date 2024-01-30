const express = require('express')
const router = express.Router()
const {addExpensesFunc} = require("../controlar/AddExpenses") 
router.post("/addExpensesData",addExpensesFunc)

module.exports = router