import axios from 'axios'

import BASE_URL from '../config/consts'

const GOODSPURCHASED_FETCHED = 'GOODSPURCHASED_FETCHED'

export const getGoodsPurchased = () => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/expenseGoodsPurchased`)
            .then(response => 
                dispatch({
                    type: GOODSPURCHASED_FETCHED,
                    payload: response.data
                })    
            )
            .catch(error => console.error('Internal server error!'))
    }
}