import axios from 'axios'
import conf from '../../conf'
export const LOAD_PRODUCTS = 'load:products'
export const ERROR_LOAD_PRODUCTS = 'error:products'
export const LOADER = 'loader:loader'


export function load_product(products) {
    return {
        type: LOAD_PRODUCTS,
        payload: {
            products,
        }
    }
}

export function error_load_product(error) {
    return {
        type: ERROR_LOAD_PRODUCTS,
        payload: {
            error
        }
    }
}

export function on_loader(){
    return {
        type: LOADER,
    }
}
export function apiSearchFilter(key, type) {
    return dispatch => {
        axios.get(`${conf.BASE_URL}/api/product/?search=${key}&ordering=${type}`)
        .then(res => {
            if(res.data && res.data.length > 0) {
                console.log(res.data)
                dispatch(load_product(res.data))
            } else {
                dispatch(error_load_product("Can't find any products"))
            }
        })
        .catch(error => {
            dispatch(error_load_product("Server error"))
        })
    }
}


export function apiSearch(key) {
    return dispatch => {
        axios.get(`${conf.BASE_URL}/api/product/?search=${key}`)
        .then(res => {
            console.log('[SEARCH]')
            if(res.data && res.data.length > 0) {
                dispatch(load_product(res.data))
            } else {
                dispatch(error_load_product("Can't find any products"))
            }
        })
        .catch(error => {
            dispatch(error_load_product("Server error"))
        })
    }
}

export function apiFilter(type) {
    return dispatch => {
        axios.get(`${conf.BASE_URL}/api/product/?ordering=${type}`)
        .then(res => {
            if(res.data && res.data.length > 0) {
                dispatch(load_product(res.data))
            } else {
                dispatch(error_load_product("Can't find any products"))
            }
        })
        .catch(error => {
            dispatch(error_load_product("Server error"))
        })
    }
}

export function apiProducts() {
    return dispatch => {
        axios.get(`${conf.BASE_URL}/api/product/`)
        .then(res => {
            if(res.data && res.data.length > 0) {
                dispatch(load_product(res.data))
            } else {
                dispatch(error_load_product("Can't find any products"))
            }
        })
        .catch(error => {
            dispatch(error_load_product("Server error"))
        })
    }
}