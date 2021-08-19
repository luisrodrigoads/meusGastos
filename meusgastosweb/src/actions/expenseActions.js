import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset } from 'redux-form'

import BASE_URL from '../config/consts'

const EXPENSES_FETCHED = 'EXPENSES_FETCHED'

export const getReports = () => {
	return dispatch => {
		axios
			.get(`${BASE_URL}/expenseUser`)
			.then(response =>
				dispatch({
					type: EXPENSES_FETCHED,
					payload: response.data.result
				})
			)
			.catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}

export const deleteReport = id => {
	return dispatch => {
		axios
			.get(`${BASE_URL}/deleteUserExpense/${id}`)
			.then(response =>
				dispatch(getReports())
			)
			.catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}

export const postReport = values => dispatch => {
	axios
		.post(`${BASE_URL}/expenseUser`, values, {
			headers: {
				'content-type': 'multipart/form-data'
			}
		})
		.then(response => {
			if (response.status === 400) 
				toastr.error('Erro!', response)

			else if (response.status === 200) {
				dispatch(reset('newReportForm'))
				window.location = '/'                
				toastr.success('Sucesso!', 'Novo registro inserido com sucesso!')
			}
		})
		.catch(error => toastr.error('Erro!', 'Internal server error'))
}