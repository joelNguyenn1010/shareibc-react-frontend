import { UPDATE_DETAILS, ASSERT_ERROR } from '../actions/checkout-action'
const initialState = {
    cardStatus: false,
    orders: [],
    details: {
        address: '',
        city: '',
        postcode: null,
        first_name: '',
        last_name: '',
        email: ''
    },
    errors: {
        address: '',
        city: '',
        postcode: '',
        first_name: '',
        last_name: '',
        email: '',
        isError: false
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DETAILS:
            return {
                ...state,
                details: action.payload.details
            }
        case ASSERT_ERROR:
            return {
                ...state,
                errors: action.payload.errors
            }
        default:
            return state;
    }
}

export default reducer