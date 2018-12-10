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
            if(details.address.length < 5){
                errors.address = "Please enter address"
                errors.addressValidation = true
                errors.isError = true
            }
            if(details.city.length < 5){
                errors.city = "Please enter city"
                errors.cityValidation = true
                errors.isError = true
            }
     
            if(details.postcode === null){
                errors.postcode = "Please enter postcode"
                errors.postcodeValidation = true

                errors.isError = true
            }
            if(details.first_name.length <2){
                errors.first_name = "Please enter first name"
                errors.first_nameValidation = true

                errors.isError = true
            }
            if(details.last_name.length <2){
                errors.last_name = "Please enter last name"
                errors.last_nameValidation = true

                errors.isError = true
            }
            let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!re.test(details.email)){
                errors.email = "Please enter valid email"
                errors.emailValidation = true
                errors.isError = true
            }
            dispatch(assert_error(errors))
        }
    }

