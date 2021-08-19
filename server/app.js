const cors = require('cors')
const express = require('express')
const app = express()

const port = process.env.PORT || 8080

const validateToken = require('./config/validateToken');

const corsOptions = {
    origin: '*'
}

app.use(cors(corsOptions))
app.options('*',cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const ExpensesRoutes = require('./routes/expenseUser')
const UserRoutes = require('./routes/User')
const AuthRoutes = require('./routes/authUser')

//Login/Register user routes
app.post('/login',(req, res)=> AuthRoutes.login(req, res))
app.post('/signup',(req, res)=> UserRoutes.signup(req, res))
app.post('/validateToken', (req, res)=> AuthRoutes.validateToken(req, res))

//app.use('*', validateToken);

//User routes
app.get('/updateToken', validateToken,(req, res) => AuthRoutes.updateToken(req, res))
app.post('/tradeTokenToUser', validateToken,(req, res)=> AuthRoutes.tradeTokenToUser(req, res))
app.post('/updateUser', validateToken,(req, res) => UserRoutes.updateUser(req, res))

//Expenses routes
app.get('/expenseUser', validateToken,(req, res) => ExpensesRoutes.getUserExpense(req, res))
app.post('/expenseUser', validateToken,(req, res) => ExpensesRoutes.setExpense(req, res))
app.get('/deleteUserExpense/:id', (req, res) => ExpensesRoutes.deleteUserExpense(req, res))


app.listen(port, () => console.log(`Server on port: ${port}`));