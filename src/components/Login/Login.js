import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userActions from '../../store/actions/user-action'
import './Login.css'
import Checkout from '../Checkout/Card/Card'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FacebookLoginButton from './FacebookLogin';

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
        event.preventDefault();
    }

    login = () => {
        if (!this.state.errors.isError) {
            console.log(this.state.errors)
            const user = {
                'username': this.state.username,
                'password': this.state.password
            }
            this.props.login(user, () => {
                this.props.history.push('/')
            });
        }
    }
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
            
            this.props.facebookLogin(user, () => {
                this.props.history.push('/')
            })
        }

    }

    render() {
        const cardHeight = {
            height: '35rem'
        }

        return (
            <div className="responsive-card  mx-auto">

                <div className="margin card" style={cardHeight} >
                    <div className="card-body">
                        <div className="card transform-card">
                            <div className="card-body text-center">
                                <h3 className="text-white">Shareibc</h3>
                                <h2 className="text-white">Login</h2>
                            </div>
                        </div>

                        <form onSubmit={this.handleSubmit} className="form-root">
                            {/* <label>Email:</label>
                        <input type="email"  /> */}
                            <TextField
                                error={this.state.errors.usernameError}
                                className="w-100 mt-4"
                                label="Email"
                                onChange={(event) => this.setState({ username: event.target.value })} />
                            {/* <label >Password:</label> */}
                            {/* <input type="password" onChange={(event) => this.setState({ password: event.target.value })} /> */}

                            <TextField
                                error={this.state.errors.passwordError}
                                className="w-100 mt-4 mb-3"
                                label="Password"
                                type="password"
                                onChange={(event) => this.setState({ password: event.target.value })}
                            />
                            <div className="container text-center mt-5">
                                <span className="text-danger">{this.props.userReducer.mess}</span>
                            </div>
                            <div className="container text-center mt-5">
                                <FacebookLoginButton
                                    responseFacebook={this.responseFacebook}
                                    onClickFacebook={this.onClickFacebook} />
                            </div>

                            <div className="text-center button-transform">
                                <button className="btn btn-outline-primary" >Submit</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer
    }
}

export default connect(mapStateToProps, userActions)(Login);