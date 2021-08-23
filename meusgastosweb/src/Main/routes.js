import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HeaderPage from '../Components/HeaderPage';
import InitialUserPage from '../Pages/InitialUserPage';
import RegisterExpensePage from '../Pages/RegisterExpensePage';

export default function AppRoutes(){

    return(
        <Router >
            <HeaderPage />
            <Switch>
                <Route exact path='/' component={InitialUserPage} />
                <Route path='/registerExpensePage' component={RegisterExpensePage} />
            </Switch>
        </Router>
    );
}

