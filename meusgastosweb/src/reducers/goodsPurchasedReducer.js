const INITIAL_STATE = { goodsPurchasedList: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'GOODSPURCHASED_FETCHED':
            return { ...state, goodsPurchasedList: action.payload }

        default:
            return state
    }
}