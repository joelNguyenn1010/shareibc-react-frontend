import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as userActions from '../../store/actions/user-action'
import './Login.css'
import Checkout from '../Checkout/Card/Card'
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
        validation: ''
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

    handleSubmit(event) {
        const user = {
            'username': this.state.username,
            'password': this.state.password
        }
        this.props.login(user, () => {
            this.props.history.push('/')
        });

        event.preventDefault();
    }

    render() {
        return (
            <div className="margin">
                <p>Validation: {this.props.userReducer.auth}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:</label>
                    <input type="email" onChange={(event) => this.setState({ username: event.target.value })} />
                    <label >Password:</label>
                    <input type="password" onChange={(event) => this.setState({ password: event.target.value })} />
                    <button>Submit</button>
                </form>
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