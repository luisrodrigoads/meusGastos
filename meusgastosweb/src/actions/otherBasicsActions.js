import axios from 'axios'

import BASE_URL from '../config/consts'

const OTHERBASICS_FETCHED = 'OTHERBASICS_FETCHED'

export const getOtherBasics = () => {
    return dispatch => {
        axios
            .get(`${BASE_URL}/expenseOtherBasics`)
            .then(response => 
                dispatch({
                    type: OTHERBASICS_FETCHED,
                    payload: response.data
                })    
            )
            .catch(error => console.error('Internal server error!'))
    }
}