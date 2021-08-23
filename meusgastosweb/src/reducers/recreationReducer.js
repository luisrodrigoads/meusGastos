const INITIAL_STATE = { recreationList: [{}] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'RECREATION_FETCHED':
            return { ...state, recreationList: action.payload }

        default:
            return state
    }
}