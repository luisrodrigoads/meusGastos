const {expense} = require('../config/db')

const getExpense = (req, res) => {

    expense
        .find()
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(400).json(err);
        })
}

const deleteExpense = (req, res) => {
    
    const expenseID = req.params.id;

    expense
        .deleteOne({_id: expenseID})
        .exec((err, result) => {
            if(err) res.status(400).json(err)
            else {
                res.status(200).json({result})
            }
        })
}

const setExpense = async (req, res) => {
    const newExpense = await new expense(req.body)

    new expense (newExpense).save(err => 
        err ?
            res.status(202).json('Erro ao cadastrar gasto: '+ err) :
            res.status(200).json('Gasto cadastrado com sucesso!')
        )
}

const getTypeGrocery = (req, res) => {
    
    expense.find({typeOfExpense: 'GROCERY'})
         .select('title valueOfExpense typeOfExpense')
         .exec((err, response) => {
            if(err) {
                console.log(err);
                return res.status(500).json("Error on server side");
            }
            return res.status(200).json(response);
        });
}

const getTypeOtherBasics = (req, res) => {

    expense.find({typeOfExpense: 'OTHER_BASIC_EXPENSES'})
         .select('title valueOfExpense typeOfExpense')
         .exec((err, response) => {
            if(err) {
                console.log(err);
                return res.status(500).json("Error on server side");
            }
            return res.status(200).json(response);
        });
}

const getTypeGoodsPurchased = (req, res) => {

    expense.find({typeOfExpense: 'GOODS_PURCHASED'})
         .select('title valueOfExpense typeOfExpense')
         .exec((err, response) => {
            if(err) {
                console.log(err);
                return res.status(500).json("Error on server side");
            }
            return res.status(200).json(response);
        });
}

const getTypeRecreation = (req, res) => {

    expense.find({typeOfExpense: 'RECREATION'})
         .select('title valueOfExpense typeOfExpense')
         .exec((err, response) => {
            if(err) {
                console.log(err);
                return res.status(500).json("Error on server side");
            }
            return res.status(200).json(response);
        });
}

const getTypeOtherExpenses = (req, res) => {

    expense.find({typeOfExpense: 'OTHERS_EXPENSES'})
         .select('title valueOfExpense typeOfExpense')
         .exec((err, response) => {
            if(err) {
                console.log(err);
                return res.status(500).json("Error on server side");
            }
            return res.status(200).json(response);
        });
}

module.exports = {getExpense, deleteExpense, setExpense, getTypeGrocery,  getTypeOtherBasics, getTypeGoodsPurchased, getTypeRecreation, getTypeOtherExpenses}