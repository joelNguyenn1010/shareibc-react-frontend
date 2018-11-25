import React, { Component } from 'react'
import './Register.css'
import { reduxForm, Field } from 'redux-form'
import {connect } from 'react-redux'
import * as userActions from '../../store/actions/user-action'
import { compose } from 'redux';
class Register extends Component {
    state = {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            password2: '',
        validation: ''
    }

    onSubmit = (event) => {
        const newUser = event
        this.props.register(newUser, ()=> {
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
        errorMesss: state.userReducer.mess
    }
}
export default compose(
    connect(mapStateToProps, userActions),
    reduxForm({form: 'register'})
)(Register)