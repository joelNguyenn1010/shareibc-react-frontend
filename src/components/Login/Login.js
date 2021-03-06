import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userActions from '../../store/actions/user-action'
import './Login.css'
import { NavLink } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux';
import axios from 'axios'
import Logo from './logoShareibc.png'
import FacebookLoginButton from './FacebookLogin';
import * as field from '../../form-validation'



class Login extends Component {
    constructor(props) {
        super(props);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    state = {
        username: '',
        password: '',
        validation: '',
        errors: {
            isError: false,
            usernameError: false,
            passwordError: false
        }

    }
    componentWillUnmount() {
        this.props.clear_mess()
    }
    handleUsername(event) {
        this.setState({
            username: event.target.value
        });
    }

    handlePassword(event) {
        this.setState({
            password: event.target.value
        });
    }
    isAuthenticate = (callback) => {
        let errors = {
            isError: false,
            usernameError: false,
            passwordError: false
        }

        if (this.state.username.length < 5) {
            errors.isError = true
            errors.usernameError = true
        }
        if (this.state.password.length < 5) {
            errors.isError = true
            errors.passwordError = true
        }
        this.setState({
            errors: {
                ...errors
            }
        }, () => {
            //this call the function login after state change for dealing with async in setState
            callback()
        })
    }
    handleSubmit = (event) => {
        this.isAuthenticate(this.login)
    }

    login = () => {
        if (!this.state.errors.isError) {
            const user = {
                'username': this.state.username,
                'password': this.state.password
            }
            this.props.login(user, () => {
                this.props.history.push('/products')
            });
        }
    }
    onClickFacebook = (e) => {
        this.responseFacebook()
    }
    responseFacebook = (response) => {
        console.log(response)
        if (response.accessToken && response.email) {
            // const user = {
            //     token: response.accessToken,
            //     name: response.name,
            //     email: response.email
            // }
            let now = new Date()
            axios.get(`https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.REACT_APP_FACEBOOK_API}&client_secret=${process.env.REACT_APP_FACEBOOK_APP_SECRET}&fb_exchange_token=${response.accessToken}`)
                .then(res => {
                    const user = {
                        token: res.data.access_token,
                        name: response.name,
                        email: response.email,
                        expires_in: new Date(now.getTime() + 1000*res.data.expires_in)
                    }
                    this.props.facebookLogin(user, () => {
                        this.props.history.push('/')
                    })
                }

                )
                .catch(error =>
                    this.props.dispatchError()
                )



        }

    }

    render() {
        const cardHeight = {
            // height: '35rem'
        }
  
        const { handleSubmit } = this.props

        return (
            <React.Fragment>
                <div className="row justify-content-center">
                    <div className="col-responsive">

                        <div className="card" style={cardHeight} >
                            <div className="card-body">
                                <div className="card transform-card">
                                    <div className="card-body text-center">
                                        <h3 className="text-white">Shareibc</h3>
                                        <h2 className="text-white">Login</h2>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit(this.handleSubmit)} className="form-root needs-validation">
                                    <div className="form-group">
                                        <Field
                                            component={field.renderField}
                                            label="Email"
                                            name="email"
                                            hint="Ex: abcdef@gmail.com"
                                            className="w-100 p-4 form-control"
                                            onChange={(event) => this.setState({ username: event.target.value })} />
                                        {/* <label >Password:</label> */}
                                        {/* <input type="password" onChange={(event) => this.setState({ password: event.target.value })} /> */}
                                    </div>

                                    <Field
                                        component={field.renderField}
                                        label="Password"
                                        className="w-100 p-4 mb-3 form-control"
                                        name="password"
                                        type="password"
                                        onChange={(event) => this.setState({ password: event.target.value })}
                                    />

                                    <span className="text-danger">{this.props.userReducer.mess}</span>
                                    {/* <div className="container text-center mt-5"> */}
                
                                    {/* </div> */}
                                    <button className="btn btn-outline-info waves-effect btn-block">Submit</button>
                            

                                    {/* <div className="text-center button-transform">
                                </div> */}
                                </form>
                                <FacebookLoginButton
                                        responseFacebook={this.responseFacebook}
                                        onClickFacebook={this.onClickFacebook} />
                                                <div className="register-form__login">
                                        <span>Don't have account?&nbsp; </span>
                                        <div>
                                            <span>
                                                <NavLink to='/register'><strong>Register</strong></NavLink>
                                            </span>
                                        </div>
                                    </div>
                            </div>

                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer
    }
}

export default compose(
    connect(mapStateToProps, userActions),
    reduxForm({
        form: 'login',
        validate: field.validate
    })
)(Login);


