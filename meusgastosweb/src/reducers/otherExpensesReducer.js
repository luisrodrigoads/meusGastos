const INITIAL_STATE = { otherExpensesList: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'OTHEREXPENSES_FETCHED':
            return { ...state, otherExpensesList: action.payload }

        default:
            return state
    }
}