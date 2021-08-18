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
const AuthRoutes = require('./routes/authUser')

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//Login/Register user routes
app.post('/login',(req, res)=> AuthRoutes.login(req, res))
app.post('/signup',(req, res)=> AuthRoutes.signup(req, res))
app.post('/validateToken', (req, res)=> AuthRoutes.validateToken(req, res))

app.use('*', validateToken);

//User routes
app.get('/updateToken',(req, res) => AuthRoutes.updateToken(req, res))
app.post('/tradeTokenToUser',(req, res)=> AuthRoutes.tradeTokenToUser(req, res))
app.post('/updateUser',(req, res) => AuthRoutes.updateUser(req, res))

//Expenses routes
app.get('/expenseUser', (req, res) => ExpensesRoutes.getUserExpense(req, res))
app.post('/expenseUser', (req, res) => ExpensesRoutes.setExpense(req, res))
app.get('/deleteUserExpense/:id', (req, res) => ExpensesRoutes.deleteUserExpense(req, res))


app.listen(port, () => console.log(`Server on port: ${port}`));