import axios from 'axios'
import { LOGIN, REGISTER, REGISTER_ERROR ,ERROR, LOGOUT, FACEBOOK_LOGIN, CLEAR_MESS } from './types'

export const register = (newUser, callback) => async dispatch => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/auth/create`, newUser)
        dispatch({ type: REGISTER, payload: res.data })
        callback()
    } catch (e) {
        if(e.response.data.username) {
            dispatch({ type: REGISTER_ERROR, payload: "Username already register"})
        } else if (e.response.data.email) {
            dispatch({ type: REGISTER_ERROR, payload: "Email already register"})
        } else {
            dispatch({ type: REGISTER_ERROR, payload: "Server error, please try again"})

        }
    }
}

export const login = (user, callback) => async dispatch => {
    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/api-token-auth/`, user)
        const auth = {
            ...res.data
        }
        dispatch({type: LOGIN, payload: auth})
        callback()
    } catch (e) {
        dispatch({ type: ERROR, payload: 'Username or password is incorrect, please try again' })
    }
}
export const dispatchError = () => {
    return (dispatch) => {
        dispatch({
            type: ERROR,
            payload: "Error occur, please try again"
        })
    }
}

export const facebookLogin = (user, callback) => dispatch => {
    dispatch({
        type:FACEBOOK_LOGIN,
        payload: user
    })
    callback()
}

export const logout = (callback) => dispatch => {
    var auth = {
        token: '',
        mess: '',
        loginType: '',
        email: '',
        name: '',
        headers: {}
      }
    localStorage.setItem('auth', JSON.stringify(auth))
    dispatch({ type: LOGOUT , payload: '' })
    callback()
}

export const clear_mess = () => dispatch => {
    dispatch({type: ERROR, payload:  ''})
}



export const isAuthenticated = (token) => async dispatch => {
    const verify = {
        "token": token
    }
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
    }
    if (token) {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/api-token-verify/`, verify, { headers: headers })
            .then(res => {
                // dispatch({type: LOGOUT, payload: {auth: '', mess: 'You have been logout'}})
            })
            .catch(error => dispatch({ type: LOGOUT, payload: { auth: '', mess: 'You have been logout' } }))
    } else {
        return false
    }

}

    // if(auth.token && auth.loginType === FACEBOOK_LOGIN) {
    //     return {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer facebook ${auth.token}`
    //     }
    // }

// export function load_product(username, password) {
//     return {
//         type: LOGIN,
//         payload: {
//             username,
//             password
//         }
//     }
// }

