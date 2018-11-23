import { REGISTER, ERROR , LOGIN, LOGOUT} from './../actions/types'
const initialState = {
    auth: {},
    mess: ''
}

const reducer = (state = initialState, action) =>{ 
    switch(action.type){
        case REGISTER:
            return {
                ...state,
                auth: action.payload,
                mess: 'Success'
            }
        case ERROR:
            return {
                ...state,
                mess: action.payload
            }
        case LOGIN:
            return {
                ...state,
                auth: action.payload
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                auth: action.payload.auth,
                mess: action.payload.mess
            }
        default:
            return state;
    }
}

export default reducer