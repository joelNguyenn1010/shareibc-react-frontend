import axios from 'axios'
import conf from '../../conf'
export const LOAD_PRODUCTS = 'load:products'
export const ERROR_LOAD_PRODUCTS = 'error:products'
export const LOADER = 'loader:loader'
export const PAGE = 'page:product'
export const SEARCH = 'search:product'
export const TYPE = 'type:product'
export const CITY = 'city:product'
export const DATE ='date:product'
export const CITIES_FETCH ='cities:product:fetch'


//loading product
export function load_product(products) {
    return {
        type: LOAD_PRODUCTS,
        payload: {
            products,
        }
    }
}
//if there error occur when do api call
export function error_load_product(error) {
    return {
        type: ERROR_LOAD_PRODUCTS,
        payload: {
            error
        }
    }
}
//this is for loading animation
export function on_loader(){
    return {
        type: LOADER,
    }
}
export function apiSearchFilter() {
    return (dispatch,getState) => {

        let type = getState().productReducer.type
        let page = getState().productReducer.page
        let search = getState().productReducer.search
        let city = getState().productReducer.city
        let date = getState().productReducer.date
        axios.get(`${conf.BASE_URL}/api/product/?search=${search}&ordering=${type}&page=${page}&city=${city}&date=${date}`)
        .then(res => {
            if(res.data) {
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


export function apiSearch(search) {
    return (dispatch, getState) => {
        //Do someFunc first then this action, use getState() for currentState if you want
        dispatch( {
            type: SEARCH,
            payload: {
                search,
                page: 1
            }
        });
        dispatch(apiSearchFilter());

    }
}


export function apiCity(city) {
    return (dispatch, getState) => {
        //Do someFunc first then this action, use getState() for currentState if you want
        dispatch( {
            type: CITY,
            payload: {
                city,
                page: 1
            }
        });
        dispatch(apiSearchFilter());

    }
}

export const apiDate =(date)=> {
    return(dispatch,getState) => {
        dispatch({
            type: DATE,
            payload: {
                date,
                page: 1
            }
        })
        dispatch(apiSearchFilter());

    }
}

export function onApiNextProductPage(url) {
    return dispatch => {
        axios.get(url)
        .then(res => {
            if(res.data && res.data.length > 0) {
                dispatch(load_product(res.data))
            }
        })
    }
}

export function apiFilter(type) {
    return (dispatch, getState) => {
        //Do someFunc first then this action, use getState() for currentState if you want
        dispatch( {
            type: TYPE,
            payload: {
                type,
                page: 1
            }
        });
        dispatch(apiSearchFilter());

    }
}

export function apiPage(page) {
    return (dispatch, getState) => {
    
        //Do someFunc first then this action, use getState() for currentState if you want
        dispatch( {
            type: PAGE,
            payload: {
                page
            }
        });
        // dispatch(apiSearchFilter(search, type, page));
        dispatch(apiSearchFilter());

    }
}

export const apiFetchCity = () => {
    return(dispatch) => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product/city/`)
        .then(res => {
            console.log(res.data)
            if (res.data && res.data.length > 0) {
                dispatch({
                    type: CITIES_FETCH,
                    payload: {
                        citiesFetch: res.data
                    }
                })
            }
        })
        .catch(error => { })

    }
}


//api call for all product
export function apiProducts() {
    return dispatch => {
        dispatch(apiSearchFilter())
        // axios.get(`${conf.BASE_URL}/api/product/`)
        // .then(res => {
        //     if(res.data) {
        //         dispatch(load_product(res.data))
        //     } else {
        //         dispatch(error_load_product("Can't find any products"))
        //     }
        // })
        // .catch(error => {
        //     dispatch(error_load_product("Server error"))
        // })
    }
}