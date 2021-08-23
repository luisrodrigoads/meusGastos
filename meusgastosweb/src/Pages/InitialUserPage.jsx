import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';

import { getGrocery } from '../actions/groceryActions';
import { getOtherBasics } from '../actions/otherBasicsActions';
import { getGoodsPurchased } from '../actions/goodsPurchasedActions';
import { getRecreation } from '../actions/recreationActions';
import { getOtherExpenses } from '../actions/otherExpensesActions';

import ExpenseSection from '../Components/ExpenseSection';
import '../styles/initialUserPageStyle.css';

export default function InitialUserPage() {

    const dispatch = useDispatch();

    const grocery = useSelector(state => state.grocery.groceryList);
    const otherBasicExpenses = useSelector(state => state.otherBasics.otherBasicsList);
    const goodsPurchased = useSelector(state => state.goodsPurchased.goodsPurchasedList);
    const recreation = useSelector(state => state.recreation.recreationList);
    const otherExpenses = useSelector(state => state.otherExpenses.otherExpensesList);

    useEffect(() => {
        dispatch(getGrocery());
        dispatch(getOtherBasics());
        dispatch(getGoodsPurchased());
        dispatch(getRecreation());
        dispatch(getOtherExpenses());
    }, [])

    console.log(grocery);

    return(
        <main className="initialuserpage-container">

            {grocery.length > 0 ? <ExpenseSection idList="grocery" list={grocery} title="Mercado" /> : null}
            {otherBasicExpenses.length > 0 ? <ExpenseSection idList="otherBasics" list={otherBasicExpenses} title="Outros gastos básicos"/> : null}
            {goodsPurchased.length > 0 ? <ExpenseSection idList="goodsPurchased" list={goodsPurchased} title="Bens adquiridos" /> : null}
            {recreation.length > 0? <ExpenseSection idList="recreation" list={recreation} title="Lazer" />: null}
            {otherExpenses.length > 0? <ExpenseSection idList="otherExpenses" list={otherExpenses} title="Outros Gastos" />   : null}
     
        </main>
    );
}