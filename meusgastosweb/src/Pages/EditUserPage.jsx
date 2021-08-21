import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

import { updateUser } from '../actions/userActions';
import FormRegisterUser from '../Forms/FormRegisterUser';

function EditUserPage() {

    const user = useSelector(state => state.user.personalInfo);

    const dispatch = useDispatch();

    const updateHandle = values => {
        dispatch(updateUser(values));
    }

    return(
       <>
            <FormRegisterUser isUpdateForm={true} initialValues={user}  onSubmit={values => updateHandle(values)} /> 
       </>
    );
}

export default withRouter(EditUserPage);