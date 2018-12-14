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
        email: '',
        phone_number: null
    },
    errors: {
        address: '',
        addressValidation: false,
        city: '',
        cityValidation: false,
        postcode: '',
        postcodeValidation: false,
        first_name: '',
        first_nameValidation: false,
        last_name: '',
        last_nameValidation: false,
        email: '',
        emailValidation: false,
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