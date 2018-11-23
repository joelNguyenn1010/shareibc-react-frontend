import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Links.css'
import { connect } from 'react-redux'
import * as userActions from '../../../store/actions/user-action'
class Links extends Component {
    auth() {
        this.props.isAuthenticated(this.props.auth)
        if (this.props.auth) {
            return (<li className="nav-item">
                <NavLink to="/logout" exact className="nav-link waves-effect waves-light">Logout</NavLink>
            </li>)
        } else {
            return (
                <React.Fragment>
                    <li className="nav-item">
                        <NavLink to="/login" exact className="nav-link waves-effect waves-light">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" exact className="nav-link waves-effect waves-light">Register</NavLink>
                    </li>
                </React.Fragment>
            )

        }
    }
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <NavLink to="/" exact className="nav-link waves-effect waves-light">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/products" exact className="nav-link waves-effect waves-light">Products</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link waves-effect waves-light" href="/">About us</a>
                </li>
                {this.auth()}
            </React.Fragment>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        auth: state.userReducer.auth
    }
}

export default connect(mapStateToProps, userActions)(Links)