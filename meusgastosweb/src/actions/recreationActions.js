import axios from 'axios'

import BASE_URL from '../config/consts'

const RECREATION_FETCHED = 'RECREATION_FETCHED'

export const getRecreation = () => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/expenseRecreation`)
            .then(response => 
                dispatch({
                    type: RECREATION_FETCHED,
                    payload: response.data
                })    
            )
            .catch(error => console.error('Internal server error!'))
    }
}