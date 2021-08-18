const mongoose = require('mongoose')

const userSchema = require('../models/userSchema')
const expenseSchema = require('../models/expenseSchema')

mongoose.connect("mongodb://localhost:27017/meus-gastos",
{
    useNewUrlParser: true, 
    useFindAndModify: false, 
    useCreateIndex: true, 
    useUnifiedTopology: true
})
.then(ok => {
    console.log("Connected!");
}).catch(err => {
    console.log("Error connecting with mongo. ", err)
});

const user = mongoose.model('user', userSchema)
const expense = mongoose.model('expense', expenseSchema)

module.exports = {user, expense}