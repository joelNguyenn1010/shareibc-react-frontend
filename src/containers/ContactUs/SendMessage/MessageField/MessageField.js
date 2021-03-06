import React from 'react'
import './MessageField.css'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux';
import { connect } from 'react-redux'
import axios from 'axios'

//VALIDATION
const renderField = ({
    input,
    label,
    type,
    meta: { touched, error }
  }) => (
    <div className="form-group mb-4">
      <label>{label}</label>
      <div>
        <input {...input} type={type} className="form-control border p-3"/>
        {touched &&
          (error && <span className="text-danger mt-1">{error}</span>)}
      </div>
    </div>
  )

const renderTextField = ({
    input,
    label,
    type,
    meta: { touched, error }
  }) => (
    <div className="form-group mb-4">
      <label>{label}</label>
      <div>
        <textarea {...input} type={type} className="form-control border p-3" rows="12"/>
        {touched &&
          ((error && <span className="text-danger mt-1">{error}</span>))}
      </div>
    </div>
  )

  const renderRadio = ({
    input,
    label,
    type,
    id,
    meta: { touched, error }
  }) => (
    <div className="custom-control custom-radio">
        <input {...input} type={type} required className="custom-control-input" id={id}/>
        <label className="custom-control-label" htmlFor={id}>{label}</label>  
        {touched &&
          ((error && <span className="text-danger mt-1">{error}</span>))}
    </div>
  )


  const validate = values => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if(!values.first_name) {
        errors.first_name = 'Required'
    }
    else if(values.first_name.length < 3) {
        errors.first_name = 'Must have more than 3 characters'
    }
    if(!values.last_name) {
        errors.last_name = 'Required'
    }
    else if(values.last_name.length < 3) {
        errors.last_name = 'Must have more than 3 characters'
    }
    if(!values.message) {
        errors.message = 'Required'
    }
 
   
    return errors
  }

  //---//
class MessageField extends React.Component {
    state = {
        mess: '',
        type: ''
    }

    submit = (e) => {
        const {createRecord, resetForm} = this.props;
        this.setState({
            mess: 'Sendingggggg',
            type: 'text-info'
        })
        const data = {
            ...e,
            user: null
        }
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/support/`, data,{headers: this.props.headers})
        .then(res => {
         if(res.status === 201) {
            this.setState({
                mess: "Thanks you for your message, we will contact you soon",
                type: "text-success"
            })
        }
        })
        .catch(error => {
            if(error) {
                this.setState({mess: "Server error, can't send message at the moment, please try again" , type: 'text-danger'})
            }
        
        })
    }
    render() {
        const { handleSubmit } = this.props
        return (
            <form className="mt-5" onSubmit={handleSubmit(this.submit)}>

                <label htmlFor="option-label">Type of inquiry: </label>
                <div className='option-box mb-4'>
                        <Field 
                        component={renderRadio} 
                        type="radio" 
                        value="General" 
                        name="inquiry" 
                        id="general"    
                        label="General"        
                        />
                    
                        <Field 
                        component={renderRadio} 
                        type="radio" 
                        value="Payment" 
                        name="inquiry" 
                        id="payment" 
                        label="Payment"/>
                
                        <Field component={renderRadio} 
                        type="radio" 
                        value="User Registration"
                        name="inquiry" 
                        id="registration" 
                        label="User Registration"/>
            
                
                        <Field 
                        component={renderRadio} 
                        type="radio" 
                        value="Our Services" 
                        name="inquiry" 
                        id="services" 
                        label="Our Services"/>
            
                
                        <Field 
                        component={renderRadio} 
                        type="radio" 
                        value="Career Oppotunities" 
                        name="inquiry" 
                        id="career" 
                        label="Career Oppotunities"/>
            
                </div>

                <label htmlFor="first_name">First Name *</label>
                <Field 
                component={renderField} 
                type="text" 
                name="first_name" 
                 />
                <Field 
                component={renderField}
                label="Last Name*"
                name="last_name" 
                 />
                <Field    
                component={renderField} 
                label="Email*" 
                name="email"  />

                <Field 
                component={renderTextField}
                name="message" 
                label="Your message*"
                />
                <span className={this.state.type}>{this.state.mess}</span>
                <button className='btn btn-primary float-right' type="submit">Send</button>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        headers: state.userReducer.headers,
        user: state.userReducer
    }
}

export default compose(
    connect(mapStateToProps),
    reduxForm({ 
        form: 'supportUser',
        validate
     })
)(MessageField)