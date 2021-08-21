import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { userSignup } from '../actions/authActions';
import FormRegisterUser from '../Forms/FormRegisterUser';

function RegisterUserPage() {

    const dispatch = useDispatch();

    const handleForm = values => {
        
        const user = {
            email: values.email,
            userName: values.userName,
            password: values.password
        }

        dispatch(userSignup(user));
    }

    return(
       <>
            <FormRegisterUser isUpdateForm={false}  onSubmit={values => handleForm(values)} /> 
       </>
    );
}

export default withRouter(RegisterUserPage);