import { LOAD_PRODUCTS, ERROR_LOAD_PRODUCTS, LOADER, on_loader } from '../actions/products-action'

const initialState = {
    products: [],
    error: '',
    loader: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
                loader: false
            }
        case ERROR_LOAD_PRODUCTS:
            return {
                ...state,
                error: action.payload.error,
                products: [],
                loader: false
            }
        case LOADER:
            return {
                ...state,
                products: [],
                error: '',
                loader: true
            }
        default:
            return state;
    }
}

export default reducer