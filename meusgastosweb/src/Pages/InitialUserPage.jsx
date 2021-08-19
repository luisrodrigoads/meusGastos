import React from 'react';
import { useSelector} from 'react-redux';
import '../styles/initialUserPageStyle.css'

export default function InitialUserPage(props) {

    const user = useSelector(state => state.user.personalInfo);

    return(
        <main className="initialuserpage-container">
            <p className="name-user">{user.userName}</p>
            <section className="section-resume-expense">
                <p>Mercado</p>
                <p>R$400</p>
            </section>

            <section className="section-resume-expense">
                <p>Outros gastos básicos</p>
                <p>R$250</p>
            </section>

            <section className="section-resume-expense">
                <p>Bens adquiridos</p>
                <p>R$120</p>
            </section>

            <section className="section-resume-expense">
                <p>Lazer</p>
                <p>R$80</p>
            </section>

            <section className="section-resume-expense">
                <p>Outros Gastos</p>
                <p>R$48</p>
            </section>

        </main>
    );
}