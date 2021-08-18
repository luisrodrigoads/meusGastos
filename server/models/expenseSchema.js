const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    whoCreated: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    }, 
    valueOfExpense: {
        type: Number,
        required: true
    },
    typeOfExpense: {
        type: String,
        enum: ['GROCERY','OTHER_BASIC_EXPENSES','GOODS_PURCHASED','RECREATION','OTHERS_EXPENSES'],
        required: true,
    }
})

module.exports = expenseSchema