import React, { Component } from 'react'
import './Register.css'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { register, facebookLogin, clear_mess } from '../../store/actions/user-action'
import { compose } from 'redux';
import { NavLink } from 'react-router-dom'
import FacebookLoginButton from '../Login/FacebookLogin'
import * as field from '../../form-validation'
import {
    MDBRow,
    MDBBtn
} from "mdbreact";



// //VALIDATION
// const renderField = ({
//     input,
//     label,
//     type,
//     meta: { touched, error }
//   }) => (
//     <div className="form-group mb-4">
//       <label>{label}</label>
//       <div>
//         <input {...input} type={type} className="w-100 p-4 mb-3 form-control"/>
//         {touched &&
//           (error && <span className="text-danger">{error}</span>)}
//       </div>
//     </div>
//   )



//   const validate = values => {
//     const errors = {}

//     if (!values.email) {
//       errors.email = 'This field is required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address'
//     }
//     // if(!values.first_name) {
//     //     errors.first_name = 'Required'
//     // }
//     // else if(values.first_name.length < 3) {
//     //     errors.first_name = 'Must have more than 3 characters'
//     // }
//     if(!values.password) {
//         errors.password = 'Required'
//     }
//     else if(values.password.length < 5) {
//         errors.password = 'Must have more than 5 characters'
//     }
//     // if(!values.password) {
//     //     errors.password = 'This field is required'
//     // }
 
   
//     return errors
//   }



// ////





class Register extends Component {
    state = {
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: "",
        validation: "",
        displayLogin: true
    };

    onClickFacebook = (e) => {
        this.responseFacebook()
    }
    responseFacebook = (response) => {
        if (response.accessToken && response.email) {
            const user = {
                token: response.accessToken,
                name: response.name,
                email: response.email
            }
            this.props.facebookLogin(user, () => {
                this.props.history.push('/')
            })
        }

    }

    componentWillUnmount() {
        this.props.clear_mess()
    }
    onSubmit = (event) => {
        // const newUser = event
          const newUser = {
            // username :event.email,
            // first_name : event.first_name,
            // last_name : event.last_name,
            // email : event.email,
            // password : event.password,
            // password2: event.password2,
            ...event,
            username: event.email,
            
        }
        this.props.register(newUser, () => {
            this.props.history.push('/');
        })
    }
    render() {
        const { handleSubmit } = this.props
        return (
            <div className="margin">
                {/* Register form pop-up starts here */}

                <MDBRow className="justify-content-center">
                    <div className="col-responsive">
                        <div className="card">
                            <div className="card-body">
                                {/* Register form  */}
                                <form className="register-form" onSubmit={handleSubmit(this.onSubmit)}>
                                    {/* Form name  */}
                                    <div className="card transform-card">
                                        <div className="card-body text-center">
                                            <h3 className="text-white">Shareibc</h3>
                                            <h2 className="text-white">Register</h2>
                                        </div>
                                    </div>
                                    {/* <p className="h4 text-center mb-4">Sign up</p> */}
                                    {/* Email  */}
                                  
                                        <Field
                                            name="email"
                                            type="email"
                                            label="Email *"
                                            hint="Ex: abcdef@gmail.com"
                                            component={field.renderField}
                                            id="defaultFormRegisterEmailEx"
                                            className="form-control p-4"
                                        />


                                   
                                        <Field
                                            name="first_name"
                                            type="text"
                                            label="First Name *"
                                            hint="Ex: John"
                                            component={field.renderField}
                                            id="defaultFormRegisterfirstNameEx"
                                            className="form-control p-4"
                                        />

                                
                                        <Field
                                            name="last_name"
                                            type="text"
                                            label="Last Name *"
                                            hint="Ex: Kennedy"
                                            component={field.renderField}
                                            id="last_name"
                                            className="form-control p-4"
                                        />

                              
                                        <Field
                                            name="userprofile.phone_number"
                                            type="number"
                                            label="Phone Number"
                                            hint="Ex: +61444444444"
                                            component={field.renderField}
                                            id="userprofile.phone_number"
                                            className="form-control p-4"
                                        />
                                      

                                    {/* Password */}
                          
                                        <Field
                                            name="password"
                                            type="password"
                                            label="Password *"

                                            component={field.renderField}
                                            id="defaultFormRegisterPasswordEx"
                                            className="form-control p-4"
                                        />
                               
                                        <Field
                                            type="password"
                                            component={field.renderField}
                                            name="password2"
                                            label="Confirm password *" 

                                            id="defaultFormRegisterConfirmEx"
                                            className="form-control p-4"
                                        />
                                        <span className="text-danger">{this.props.errorMesss}</span>
                         

                                    <div className="text-center mt-12">
                                        <MDBBtn
                                            className="btn-block"
                                            outline
                                            color="info"
                                            type="submit"
                                        >
                                            Join
                  </MDBBtn>
                                    </div>
                                </form>
                                <FacebookLoginButton
                                        responseFacebook={this.responseFacebook}
                                        onClickFacebook={this.onClickFacebook} />
                                <div className="register-form__login">
                                    <span>Already have an account?&nbsp; </span>
                                    <div>
                                        <span>
                                            <NavLink to='/login'>Log in</NavLink>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBRow>


                {/* 
                <p>Validation {this.props.errorMesss}</p>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <label>Username:</label>
                    <Field
                        name="username"
                        type="text"
                        component="input" />
                    <label>Email:</label>
                    <Field
                        name="email"
                        type="email"
                        component="input" />

                    <label>First Name:</label>
                    <Field
                        name="first_name"
                        type="text"
                        component="input" />

                    <label>Last Name:</label>
                    <Field
                        name="last_name"
                        type="text"
                        component="input" />

                    <label>Phone number:</label>
                    <Field
                        name="userprofile.phone_number"
                        type="number"
                        component="input" />

                    <label >Password:</label>
                    <Field
                        name="password"
                        type="password"
                        component="input" />

                    <label >Password Confirm:</label>
                    <Field
                        name="password2"
                        type="password"
                        component="input" />

                    <button>Register</button>
                </form> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        errorMesss: state.userReducer.mess,
    }
}
const mapActionToProps = {
    register,
    facebookLogin,

   clear_mess
    
}
export default compose(
    connect(mapStateToProps, mapActionToProps),
    reduxForm({ 
        form: 'register',
        validate: field.validate
 })
)(Register)