const INITIAL_STATE = { otherBasicsList: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'OTHERBASICS_FETCHED':
            return { ...state, otherBasicsList: action.payload }

        default:
            return state
    }
}