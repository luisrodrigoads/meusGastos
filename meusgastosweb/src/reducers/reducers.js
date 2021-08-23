import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import expenses from './expensesReducer'
import grocery from './groceryReducer';
import otherBasics from './otherBasicReducer';
import goodsPurchased from './goodsPurchasedReducer';
import recreation from './recreationReducer';
import otherExpenses from './otherExpensesReducer';

const rootReducer = combineReducers(
    {
        form: formReducer,
        toastr: toastrReducer,
        expenses,
        grocery, 
        otherBasics,
        goodsPurchased,
        recreation,
        otherExpenses
    }
)

export default rootReducer;