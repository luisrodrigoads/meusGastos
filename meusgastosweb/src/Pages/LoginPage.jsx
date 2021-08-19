import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, withRouter } from 'react-router';

import { login } from '../actions/authActions';
import FormLogin from '../Forms/FormLogin';

function LoginPage() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.personalInfo);

    const handleForm = data => {

        dispatch(login(data));
    }

    return(
        <>
            {
                user._id === '' ?
                    <FormLogin onSubmit={values => handleForm(values)} />
                :
                <Redirect to="/initialUserPage" />
            }
            
        </>
    );
}

export default withRouter(LoginPage);