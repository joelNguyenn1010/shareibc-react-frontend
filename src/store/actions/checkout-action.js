export const UPDATE_DETAILS = "update:details"
export const ASSERT_ERROR = "error:details"

export function update_details(details) {
    return {
        type: UPDATE_DETAILS,
        payload: {
            details
        }
    }
}

export function assert_error(errors) {
    return {
        type: ASSERT_ERROR,
        payload: {
            errors
        }
    }
}

export function isValidate(details) {
    return dispatch => {
        let errors = {
            address: '',
            addressValidation: '',
            city: '',
            cityValidation: '',
            postcode: '',
            postcodeValidation: '',
            first_name: '',
            first_nameValidation: '',
            last_name: '',
            last_nameValidation: '',
            email: '',
            emailValidation: '',
            phone_number: '',
            phone_numberValidation: '',
            isError: false
        }
        // if(details.address.length < 5){
        //     errors.address = "Please enter address"
        //     errors.addressValidation = true
        //     errors.isError = true
        // }
        // if(details.city.length < 5){
        //     errors.city = "Please enter city"
        //     errors.cityValidation = true
        //     errors.isError = true
        // }

        // if(details.postcode === null){
        //     errors.postcode = "Please enter postcode"
        //     errors.postcodeValidation = true

        //     errors.isError = true
        // }
        if (details.phone_number) {
            let re = /^\+?1?\d{9,15}$/;
            if (!re.test(details.phone_number)) {
                errors.phone_number = "Phone number should have at least 10 digits and have international format +99999999"
                errors.phone_numberValidation = 'invalid'
                errors.isError = true
            }
        }


        if (details.first_name.length < 2) {
            errors.first_name = "Please enter first name"
            errors.first_nameValidation = 'invalid'
            errors.isError = true
        }
        if (details.last_name.length < 2) {
            errors.last_name = "Please enter last name"
            errors.last_nameValidation = 'invalid'

            errors.isError = true
        }
        let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!re.test(details.email)) {
            errors.email = "Please enter valid email"
            errors.emailValidation = 'invalid'
            errors.isError = true
        }
        dispatch(assert_error(errors))
    }
}

