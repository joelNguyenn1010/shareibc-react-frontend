import {DATE, CITY, SEARCH, PAGE, TYPE, LOAD_PRODUCTS, ERROR_LOAD_PRODUCTS, LOADER, on_loader } from '../actions/products-action'

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
    search: "",
    items_per_page: 1,
    city: "",
    date: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                products: action.payload.products.results,
                next: action.payload.products.next,
                previous: action.payload.products.previous,
                count: action.payload.products.count,
                total_pages: action.payload.products.total_pages,
                items_per_page: action.payload.products.items_per_page,
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
        case CITY:
            return {
                ...state,
                city: action.payload.city,
                page: action.payload.page
            }
        case SEARCH:
            return {
                ...state,
                search: action.payload.search,
                page: action.payload.page
            }
        case DATE:
            return {
                ...state,
                date: action.payload.date,
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