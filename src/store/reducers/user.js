import { REGISTER, ERROR , LOGIN, LOGOUT, FACEBOOK_LOGIN} from './../actions/types'
const initialState = {
    auth: {},
    mess: '',
    loginType: ''
}

const reducer = (state = initialState, action) =>{ 
    switch(action.type){
        case REGISTER:
            return {
                ...state,
                ...action.payload,
                loginType: LOGIN,
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
                ...action.payload,
                loginType: LOGIN,
                mess: ''
            }
        case FACEBOOK_LOGIN:
            return {
                ...state,
                ...action.payload,
                loginType: FACEBOOK_LOGIN,
                mess: ''
            }
        case LOGOUT:
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