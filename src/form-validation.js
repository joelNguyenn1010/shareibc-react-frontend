
//VALIDATION
import React from 'react'
export const renderField = ({
    input,
    label,
    type,
    hint,
    value,
    meta: { touched, error }
    
  }) => (
    <div className="form-group mb-4">
      <label>{label}</label>
      <div>
        <input {...input} type={type} className="w-100 p-4 form-control" placeholder={hint}/>
    
        {touched &&
          (error && <span className="text-danger">{error}</span>)}
      </div>
    </div>
  )



 export const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'This field is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if(!values.first_name) {
        errors.first_name = 'This field is required'
    }

    if(!values.last_name) {
        errors.last_name = 'This field is required'
    }

    
    if(values.userprofile) {
        if(values.userprofile.phone_number){
        if(!/^\+?1?\d{9,15}$/i.test(values.userprofile.phone_number)){
            console.log(errors)
            errors.userprofile = {
                phone_number: "Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed."

            }
        }
        }

    }


    if(!values.password) {
        errors.password = 'This field is required'
    }
    else if(values.password.length < 5) {
        errors.password = 'Must have more than 5 characters'
    }

    if(!values.password2) {
        errors.password2 = 'This field is required'
    }
    else if(values.password2 !== values.password) {
        errors.password2 = 'Password must match'
    }


    // if(!values.password) {
    //     errors.password = 'This field is required'
    // }
 
   
    return errors
  }



////
