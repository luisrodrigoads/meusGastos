import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteExpense } from '../actions/expenseActions';

const ExpenseSection = props => {

    const dispatch = useDispatch();

    const [showList, setShowList] = useState(false);

    const total = props.list.reduce((total, item) => total + item.valueOfExpense, 0);

    const removeExpense = (idExpense) => {
        dispatch(deleteExpense(idExpense));
    }

    return(
        <>
            <section className="section-resume-expense">
                <p>{props.title}</p>
                <p>R$ {total}</p>
                <button onClick={() => setShowList(!showList)}>Detalhes</button>
            </section>

            {
                showList ? 
                    <section id={props.idList} className="section-list">
                    {
                        props.list.map((el, index) => {
                            return (
                                <div key={index}>
                                    <p>{el.title}</p>
                                    <p>R$ {el.valueOfExpense}</p>
                                    <button onClick={() => removeExpense(el._id)} >
                                        X
                                    </button>
                                </div>
                            );
                        })
                    }
                    </section>
                :null
            }
            
        </>
    )
}

export default ExpenseSection;