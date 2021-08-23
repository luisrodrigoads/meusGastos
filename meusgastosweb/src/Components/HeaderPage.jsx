import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyle.css';

export default function HeaderPage(){
    return(
        <header>
            <div>
            <p className="header-title">Meus Gastos App</p>
                <Link to="/registerExpensePage">
                    <button className="button-add">
                            Adicionar gasto
                    </button>
                </Link>
            </div>
        </header>
    );
}