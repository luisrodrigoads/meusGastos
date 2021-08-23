import React from 'react';
import { useDispatch } from 'react-redux';

import { postExpense } from '../actions/expenseActions';
import FormRegisterExpense from "../Forms/FormRegisterExpense";

function RegisterExpensePage(){

    const dispatch = useDispatch();

    const handleForm = values => {
        const expense = {
            title: values.title,
            valueOfExpense: parseFloat(values.valueOfExpense),
            typeOfExpense: values.typeOfExpense,
        }

        dispatch(postExpense(expense));
    }

    return(
        <>
            <FormRegisterExpense isUpdateForm={false} onSubmit={values => handleForm(values)} />
        </>
    );
}

export default RegisterExpensePage;