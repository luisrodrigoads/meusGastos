import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import '../styles/loginStyle.css';

const FormRegisterUser = props => {

    const formComponents = [
        {
            label:'Email',
            name:'email',
        },
        {
            label:'Nome',
            name:'userName',
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
               <form onSubmit={props.handleSubmit}>
                <p>Cadastrar usuário</p>  
                
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
                    Salvar
                </button>

                <Link to="/" >
                    <button type="button" className="button-login-register">
                        Voltar
                    </button>
                </Link>

               </form> 
            </section>
        </main>
    );
}

export default reduxForm({form: 'formRegisterUser'})(FormRegisterUser)