const mongoose = require('mongoose')

const {expense, user} = require('../config/db')
const {decodeJWT} = require('./authUser')

const getUserExpense = (req, res) => {
    const current_user = decodeJWT(req.headers['authorization'])

    expense
        .find({whoCreated: current_user._id})
        .sort()
        .exec((err, result) => {
            if(err) res.status(400).json(err)
            else {
                res.status(200).json({result})
            }
        })
}

const deleteUserExpense = (req, res) => {
    
    const current_user = decodeJWT(req.headers['authorization'])

    const expenseID = req.params.id;

    expense
        .deleteOne({whoCreated: current_user._id, _id: expenseID})
        .exec((err, result) => {
            if(err) res.status(400).json(err)
            else {
                res.status(200).json({result})
            }
        })
}

const setExpense = async (req, res) => {
    const newExpense = await new expense(req.body)

    const current_user = decodeJWT(req.headers['authorization'])

    newExpense.save().then(response => 
        user.findOne({_id: current_user._id}, (err, result) => {
            result.expenses.push(response._id)
            result.save()
                .then(response => res.status(200).json('Despesa cadastrada com sucesso'))
                .catch(err => res.status(500).json('Erro ao cadastrar despesa'))
        })    
    ) 
}

module.exports = {getUserExpense, deleteUserExpense, setExpense}