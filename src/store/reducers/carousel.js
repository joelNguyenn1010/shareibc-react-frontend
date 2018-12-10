import { DOWNLOAD_CAROUSEL, ERROR_CAROUSEL } from '../actions/carousel-action'
const initialState = {
    carousel: [],
    error: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DOWNLOAD_CAROUSEL:
            return {
                ...state,
                carousel: action.payload.carousel,
                loader: false
            }
        case ERROR_CAROUSEL:
            return {
                ...state,
                error: "Server error",
            }
        default:
            return state;
    }
}

export default reducer