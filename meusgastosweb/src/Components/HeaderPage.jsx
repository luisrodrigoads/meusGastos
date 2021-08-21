import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/headerStyle.css'

export default function HeaderPage(props){
    return(
        <header>
            {
                props.isLogged ? (
                    <>
                        <Link to="/editUserPage">
                            <button className="header-button">
                                config
                            </button>
                        </Link>

                        <Link to="/registerExpensePage">
                            <button className="header-button-add">
                                +
                            </button>
                        </Link>
                        
                        <Link to="/Logout">
                            <button className="header-button">
                                sair
                            </button>
                        </Link>
                    </>
                ) : (
                    <>
                        <p className="header-title">Meus Gastos App</p>
                    </>
                )
            }
            
        </header>
    );
}