import axios from 'axios'

import BASE_URL from '../config/consts'

const GROCERY_FETCHED = 'GROCERY_FETCHED'

export const getGrocery = () => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/expenseGrocery`)
            .then(response => 
                dispatch({
                    type: GROCERY_FETCHED,
                    payload: response.data
                })    
            )
            .catch(error => console.error('Internal server error!'))
    }
}