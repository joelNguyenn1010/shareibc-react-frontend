import axios from 'axios'
import { LOGIN, REGISTER, ERROR, LOGOUT, FACEBOOK_LOGIN } from './types'

export const register = (newUser, callback) => async dispatch => {
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/user/auth/create', newUser)
        dispatch({ type: REGISTER, payload: res.data })

        localStorage.setItem('auth', JSON.stringify(res.data))
        callback()
    } catch (e) {
        dispatch({ type: ERROR, payload: 'Error occur, please try again' })
    }
}

export const login = (user, callback) => async dispatch => {
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/user/api-token-auth/', user)
        const auth = {
            token: res.data.token
        }
        dispatch({type: LOGIN, payload: auth})
        localStorage.setItem('auth', JSON.stringify(auth))
        callback()
    } catch (e) {
        dispatch({ type: ERROR, payload: 'Username or password is incorrect, please try again' })
    }
}

export const facebookLogin = (user, callback) => dispatch => {
    dispatch({
        type:FACEBOOK_LOGIN,
        payload: user
    })
    localStorage.setItem('auth', JSON.stringify(user))
    callback()
}

export const logout = (callback) => async dispatch => {
    localStorage.removeItem('auth')
    dispatch({ type: LOGOUT, payload: { auth: '', mess: 'You have been logout' } })
    callback()
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
        const res = await axios.post('http://127.0.0.1:8000/api/user/api-token-verify/', verify, { headers: headers })
            .then(res => {
                // dispatch({type: LOGOUT, payload: {auth: '', mess: 'You have been logout'}})
            })
            .catch(error => dispatch({ type: LOGOUT, payload: { auth: '', mess: 'You have been logout' } }))
    } else {
        return false
    }

}
// export function load_product(username, password) {
//     return {
//         type: LOGIN,
//         payload: {
//             username,
//             password
//         }
//     }
// }

// export function apiProducts() {
//     return dispatch => {
//         axios.get('http://127.0.0.1:8000/api/product/index/')
//         .then(res => {
//            dispatch(load_product(res.data))
//         })
//         .catch(error => {
//             console.log(error);
//         })
//     }
// }