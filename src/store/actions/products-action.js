import axios from 'axios'
export const LOAD_PRODUCTS = 'load:products'

export function load_product(products) {
    return {
        type: LOAD_PRODUCTS,
        payload: {
            products
        }
    }
}

export function apiProducts() {
    return dispatch => {
        axios.get('http://127.0.0.1:8000/api/product/index/')
        .then(res => {
           dispatch(load_product(res.data))
        })
        .catch(error => {
            console.log(error);
        })
    }
}