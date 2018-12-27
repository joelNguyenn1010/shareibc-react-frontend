import React, { Component } from 'react'
import './Register.css'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { register, facebookLogin } from '../../store/actions/user-action'
import { compose } from 'redux';
import { NavLink } from 'react-router-dom'
import FacebookLoginButton from '../Login/FacebookLogin'
import {
    MDBRow,
    MDBBtn
} from "mdbreact";
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
        console.log(response)
        if (response.accessToken && response.email) {
            const user = {
                token: response.accessToken,
                name: response.name,
                email: response.email
            }
            console.log(user)
            this.props.facebookLogin(user, () => {
                this.props.history.push('/')
            })
        }

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
            username: event.email
        }
        this.props.register(newUser, () => {
            this.props.history.push('/');
        })
    }
    render() {

        const { handleSubmit } = this.props
        return (
            <div className="margin">

                {/*   
        {!this.state.displayLogin && 
        <MDBContainer>
          <div className="row justify-content-center">
            <MDBCol md="6">
              <div className="text-center mt-12">
                <MDBBtn
                  className="form__button form__button-facebook"
                  color="info"
                  type="submit"
                >
                  <MDBIcon
                    className="button__icon button__icon-facebook"
                    icon="facebook-square"
                  />
                  <p> Continue with Facebook </p>
                </MDBBtn>
              </div>
            </MDBCol>
          </div>
          <MDBRow>
            <MDBCol md="6">
              <div className="text-center mt-12">
                <MDBBtn
                  className="form__button form__button-google"
                  type="submit"
                >
                  <MDBIcon className="button__icon" icon="google-plus-square" />
                  <p> Continue with Google</p>
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6">
              <div className="text-center mt-12">
                <MDBBtn className="form__button" color="primary" type="submit">
                  Sign up
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>} */}
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
                                    <div className="form-group">
                                        <label htmlFor="defaultFormRegisterEmailEx">
                                            Email
                                    </label>
                                        <Field
                                            name="email"
                                            type="email"
                                            component="input"
                                            id="defaultFormRegisterEmailEx"
                                            className="form-control p-4"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="defaultFormRegisterfirstNameEx">
                                            First Name
                                    </label>
                                        <Field
                                            name="first_name"
                                            type="text"
                                            component="input"
                                            id="defaultFormRegisterfirstNameEx"
                                            className="form-control p-4"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="last_name">
                                            Last Name
                                    </label>
                                        <Field
                                            name="last_name"
                                            type="text"
                                            component="input"
                                            id="last_name"
                                            className="form-control p-4"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">
                                            Phone Number
                                    </label>
                                        <Field
                                            name="userprofile.phone_number"
                                            type="number"
                                            component="input"
                                            id="phone"
                                            className="form-control p-4"
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="form-group">
                                        <label htmlFor="defaultFormRegisterPasswordEx">
                                            Your password
                                        </label>
                                        <Field
                                            name="password"
                                            type="password"
                                            component="input"
                                            id="defaultFormRegisterPasswordEx"
                                            className="form-control p-4"
                                        />
                                    </div>
                                    <div className="form-group">
                                        {/* Confirm password */}
                                        <label htmlFor="defaultFormRegisterConfirmEx">
                                            Confirm password
                                            </label>
                                        <Field
                                            type="password"
                                            component="input"
                                            name="password2"
                                            id="defaultFormRegisterConfirmEx"
                                            className="form-control p-4"
                                        />
                                    </div>
                                    <FacebookLoginButton
                                        responseFacebook={this.responseFacebook}
                                        onClickFacebook={this.onClickFacebook} />


                                    <div className="text-center mt-12">
                                        <MDBBtn
                                            className="form__button"
                                            outline
                                            color="info"
                                            type="submit"
                                        >
                                            Join
                  </MDBBtn>
                                    </div>
                                </form>
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
    facebookLogin
}
export default compose(
    connect(mapStateToProps, mapActionToProps),
    reduxForm({ form: 'register' })
)(Register)