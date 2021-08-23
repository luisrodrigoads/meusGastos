const INITIAL_STATE = { groceryList: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'GROCERY_FETCHED':
            return { ...state, groceryList: action.payload }

        default:
            return state
    }
}