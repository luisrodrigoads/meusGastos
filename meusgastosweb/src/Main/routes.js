import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import AuthOrApp from  './Auth';
import { relogin  } from '../actions/authActions';

import HeaderPage from '../Components/HeaderPage';
import LoginPage from '../Pages/LoginPage';
import LogoutPage from '../Pages/LogoutPage';
import RegisterUserPage from '../Pages/RegisterUserPage';
import InitialUserPage from '../Pages/InitialUserPage';

function ProtectedRoute({component: Component, ...rest}){

    return(
        <Route
            {...rest}
            render={(props)=>{
                if(AuthOrApp){
                    return <Component />;
                }else{
                    return <Redirect to={{pathname:"/", state:{from: props.location} }}/>
                }
            }}
        />
    );
}

export default function AppRoutes(){

    const user = useSelector(state => state.user.personalInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(relogin());

    },[dispatch]);

    return(
        <Router>
            <HeaderPage isLogged={ user._id === '' ? false : true} />

            <Switch>
                <Route exact path='/' component={LoginPage} />
                <Route path='/registerUserPage' component={RegisterUserPage} />
                <ProtectedRoute path='/initialUserPage' component={InitialUserPage} />

                <Route path='/Logout' component={LogoutPage}/>
            </Switch>
        </Router>
    );
}

