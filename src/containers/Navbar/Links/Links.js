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
                    <NavLink className="nav-link waves-effect waves-light" to="/about-us">About us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/cart" exact className="nav-link waves-effect waves-light">Cart {this.props.cart.length}</NavLink>
                </li>
            </React.Fragment>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        auth: state.userReducer.auth,
        cart: state.cartReducer.products
    }
}

export default connect(mapStateToProps, userActions)(Links)