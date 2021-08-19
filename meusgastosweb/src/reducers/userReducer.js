const INITIAL_STATE = {
    personalInfo: {
        _id:'',
        userName:'',
        email:'',
        password:'',
        expenses:[],
    }
}

export default function userStateUpdate(state = INITIAL_STATE, action) {
    switch(action.type){
        case 'USER_FETCHED':
            console.log("User: ", action.payload)
            return {
                ...state,
                personalInfo:{
                   ...action.payload
                }
            }
        
        case 'USER_LOGOUT': 
            return {
                ...state,
                personalInfo:{
                    _id: '',
                }
            }

        default:
            return state
    }
}