import React, { Component } from 'react'
import './Register.css'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { register } from '../../store/actions/user-action'
import { compose } from 'redux';
import {NavLink } from 'react-router-dom'
import {
    MDBCard,
    MDBCardBody,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
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
  
    onSubmit = (event) => {
        // const newUser = event
        const newUser = event
        console.log(newUser)
        this.props.register(newUser, () => {
            this.props.history.push('/');
        })
      


        // const user = {
        //     username : this.state.username,
        //     first_name : this.state.first_name,
        //     last_name : this.state.last_name,
        //     email : this.state.email,
        //     password : this.state.password,
        //     password2: this.state.password2

        // }
        // axios.post('http://127.0.0.1:8000/api/user/auth/create', user)
        // .then(res => {
        //     console.log(res)
        // })
        // .catch(error => console.log(error))
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
        {this.state.displayLogin && <MDBContainer>
          <MDBRow className="justify-content-center">
            <div className="col-responsive">
              {/* Register form  */}
              <form className="register-form">
                {/* Form name  */}
                <p className="h4 text-center mb-4">Sign up</p>
                <br />
                {/* Email  */}
                <label
                  htmlFor="defaultFormRegisterEmailEx"
                  className="grey-text"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="defaultFormRegisterEmailEx"
                  className="form-control"
                />
                <br />
                {/* Password */}
                <label
                  htmlFor="defaultFormRegisterPasswordEx"
                  className="grey-text"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="defaultFormRegisterPasswordEx"
                  className="form-control"
                />
                <br />
                {/* Confirm password */}
                <label
                  htmlFor="defaultFormRegisterConfirmEx"
                  className="grey-text"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="defaultFormRegisterConfirmEx"
                  className="form-control"
                />
                <br />

                <div className="text-center mt-12">
                  <MDBBtn
                    className="form__button"
                    color="primary"
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
                    <NavLink to="/login">Log in</NavLink>
                  </span>
                </div>
              </div>
            </div>
          </MDBRow>
        </MDBContainer>
        }


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
                </form>
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
    register
}
export default compose(
    connect(mapStateToProps, mapActionToProps),
    reduxForm({ form: 'register' })
)(Register)