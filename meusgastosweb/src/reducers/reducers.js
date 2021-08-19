import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'

import user from './userReducer'
import auth from './authReducer'
import expenses from './expensesReducer'


const rootReducer = combineReducers(
    {
        form: formReducer,
        toastr: toastrReducer,
        expenses,
        user,
        auth
    }
)

export default rootReducer;