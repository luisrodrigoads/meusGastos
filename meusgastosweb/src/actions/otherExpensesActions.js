import axios from 'axios'

import BASE_URL from '../config/consts'

const OTHEREXPENSES_FETCHED = 'OTHEREXPENSES_FETCHED'

export const getOtherExpenses = () => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/expenseOtherExpenses`)
            .then(response => 
                dispatch({
                    type: OTHEREXPENSES_FETCHED,
                    payload: response.data
                })    
            )
            .catch(error => console.error('Internal server error!'))
    }
}