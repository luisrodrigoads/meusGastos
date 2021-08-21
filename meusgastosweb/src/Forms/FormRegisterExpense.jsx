import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import '../styles/loginStyle.css';

const FormRegisterExpense = props => {

    const formComponents = [
        {
            label:'Titulo',
            name:'title',
        },
        {
            label:'Valor',
            name:'valueOfExpense',
        }
    ];

    return(
        <main className="login-page-container">
            <section className="login-form-container">
               <form onSubmit={props.handleSubmit}>
                <p>Cadastrar Despesa</p>  
                
                {formComponents.map(comp => {
                    return (
                        <div key={comp.name} className="input-login-container">
                            <label htmlFor={comp.name}>{comp.label}</label>
                            <Field 
                                required
                                name={comp.name}
                                component='input'
                                type='text' 
                            />
                        </div>
                    );
                })}

                <div className="input-login-container">
                    <label htmlFor="typeOfExpense" >Tipo de despesa</label>
                    <Field name="typeOfExpense" component="select" required  className="type-expense-input" >
                        <option value="" disabled defaultValue >Selecione um tipo</option>
                        <option value="GROCERY">Mercado</option>
                        <option value="OTHER_BASIC_EXPENSES">Outras despesas básicas</option>
                        <option value="GOODS_PURCHASED">Bens adquiridos</option>
                        <option value="RECREATION">Lazer</option>
                        <option value="OTHERS_EXPENSES">Outras despesas</option>
                    </Field>
                </div>

                <button type="submit" className="button-login">
                    Salvar
                </button>

                <Link to="/initialUserPage" >
                    <button type="button" className="button-login-register">
                        Voltar
                    </button>
                </Link>

               </form> 
            </section>
        </main>
    );
}

export default reduxForm({form: 'formRegisterExpense'})(FormRegisterExpense)