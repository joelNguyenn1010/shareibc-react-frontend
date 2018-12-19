import { REGISTER, ERROR , LOGIN, LOGOUT, FACEBOOK_LOGIN, REGISTER_ERROR} from './../actions/types'
const initialState = {
    token: '',
    mess: '',
    loginType: '',
    email: '',
    name: '',
    headers: {},

}

const reducer = (state = initialState, action) =>{ 
    switch(action.type){
        case REGISTER:
            let userRegister = {
                ...state,
                ...action.payload,
                loginType: LOGIN,
                name: action.payload.first_name + " " + action.payload.last_name,
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `JWT ${action.payload.token}`,
                },
                mess: 'Success'
            }
            localStorage.setItem('auth', JSON.stringify(userRegister))
            return userRegister
        case ERROR:
            return {
                ...state,
                mess: action.payload,
            }
        case REGISTER_ERROR:
            return {
                ...state,
                mess: action.payload,

            }
        case LOGIN:
            let userLogin = {
                ...state,
                ...action.payload,
                loginType: LOGIN,
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `JWT ${action.payload.token}`,
                },
                mess: ''
            }
            localStorage.setItem('auth', JSON.stringify(userLogin))
            return userLogin
        case FACEBOOK_LOGIN:
            let userFacebook = {
                ...state,
                ...action.payload,

                loginType: FACEBOOK_LOGIN,
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization" :`Bearer facebook ${action.payload.token}`
                },
                mess: ''
            }
            localStorage.setItem('auth', JSON.stringify(userFacebook))

            return userFacebook
        case LOGOUT:
            return {
                ...state,
                email: '',
                name: '',
                token:'',
                mess: '',
                headers: {},
                loginType: ''
            }
        default:
            return state;
    }
}

export default reducer