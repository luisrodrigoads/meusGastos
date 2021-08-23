const cors = require('cors')
const express = require('express')
const app = express()

const port = process.env.PORT || 8080

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions))
app.options('*',cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const ExpensesRoutes = require('./routes/expenseUser')

//Expenses routes
app.get('/expenseUser', (req, res) => ExpensesRoutes.getExpense(req, res))
app.post('/expenseUser', (req, res) => ExpensesRoutes.setExpense(req, res))
app.get('/deleteUserExpense/:id', (req, res) => ExpensesRoutes.deleteExpense(req, res))
app.get('/expenseGrocery', (req, res) => ExpensesRoutes.getTypeGrocery(req, res))
app.get('/expenseOtherBasics', (req, res) => ExpensesRoutes.getTypeOtherBasics(req, res))
app.get('/expenseGoodsPurchased', (req, res) => ExpensesRoutes.getTypeGoodsPurchased(req, res))
app.get('/expenseRecreation', (req, res) => ExpensesRoutes.getTypeRecreation(req, res))
app.get('/expenseOtherExpenses', (req, res) => ExpensesRoutes.getTypeOtherExpenses(req, res))


app.listen(port, () => console.log(`Server on port: ${port}`));