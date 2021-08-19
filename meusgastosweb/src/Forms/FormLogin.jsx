import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import '../styles/loginStyle.css';

const FormLogin = props => {

    const formComponents = [
        {
            label:'Email',
            name:'email',
        },
        {
            label:'Senha',
            name:'password',
            type:'password',
            autocomplete:'on'
        },
    ];

    return(
        <main className="login-page-container">
            <section className="login-form-container">
               <form onSubmit={props.handleSubmit} >
                <p>Login</p>  
                
                {formComponents.map(comp => {
                    return (
                        <div key={comp.name} className="input-login-container">
                            <label htmlFor={comp.name}>{comp.label}</label>
                            <Field 
                                required
                                name={comp.name}
                                component='input'
                                type={comp.type ? comp.type : 'text'}
                                autoComplete={comp.autoComplete ? comp.autocomplete : 'off'} 
                            />
                        </div>
                    );
                })}
                <button type="submit" className="button-login">
                    Entrar
                </button>

                <Link to="/registerUserPage" >
                    <button type="button" className="button-login-register">
                        Cadastrar
                    </button>
                </Link>

               </form> 
            </section>
        </main>
    );
}

export default reduxForm({form: 'formLogin'})(FormLogin)