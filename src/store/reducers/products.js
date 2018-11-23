import { LOAD_PRODUCTS } from '../actions/products-action'

const initialState = {
    products: {
        name: '',
        company: '',
        price: 1.00,
        value: 1.00
    }
}

const reducer = (state = initialState, action) =>{ 
    switch(action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                products: action.payload.products
            }
        default:
            return state;
    }
}

export default reducer