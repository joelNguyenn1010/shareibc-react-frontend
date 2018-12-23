import { SEARCH, PAGE, TYPE, LOAD_PRODUCTS, ERROR_LOAD_PRODUCTS, LOADER, on_loader } from '../actions/products-action'

const initialState = {
    products: [],
    error: '',
    loader: true,
    count: 0,
    next: null,
    previous: null,
    total_pages: 0,
    page: 1,
    type: "",
    search: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
        console.log(action.payload.products)
            return {
                ...state,
                products: action.payload.products.results,
                next: action.payload.products.next,
                previous: action.payload.products.previous,
                count: action.payload.products.count,
                total_pages: action.payload.products.total_pages,
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
        case SEARCH:
            return {
                ...state,
                search: action.payload.search,
                page: action.payload.page
            }
        case TYPE:
            return {
                ...state,
                type: action.payload.type,
                page: action.payload.page
            }
        case PAGE:
            return {
                ...state,
                page: action.payload.page
            }
        default:
            return state;
    }
}

export default reducer