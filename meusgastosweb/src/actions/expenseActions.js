import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import { reset } from 'redux-form'

import BASE_URL from '../config/consts'

const EXPENSES_FETCHED = 'EXPENSES_FETCHED'

export const getExpenses = () => {
	return dispatch => {
		axios
			.get(`${BASE_URL}/expenseUser`)
			.then(response =>
				dispatch({
					type: EXPENSES_FETCHED,
					payload: response.data
				})
			)
			.catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}

export const deleteExpense = id => {
	return dispatch => {
		axios
			.get(`${BASE_URL}/deleteUserExpense/${id}`)
			.then(response =>
				window.location = '/'
			)
			.catch(error => toastr.error('Erro!', 'Internal server error'))
	}
}

export const postExpense = values => dispatch => {
	axios
		.post(`${BASE_URL}/expenseUser`, values)
		.then(response => {
			if (response.status === 400) 
				toastr.error('Erro!', response)

			else if (response.status === 200) {
				dispatch(reset('newReportForm'))                
				toastr.success('Sucesso!', 'Novo registro inserido com sucesso!')
				window.location = '/'
			}
		})
		.catch(error => toastr.error('Erro!', 'Internal server error'))
}