import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Links.css'
import { connect } from 'react-redux'

import * as userActions from '../../../store/actions/user-action'
class Links extends Component {

    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <NavLink to="/" exact activeClassName="active" className="nav-link waves-effect waves-light">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/products" exact className="nav-link waves-effect waves-light">Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link waves-effect waves-light" to="/contact-us">Contact us</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/projects" exact className="nav-link waves-effect waves-light">Projects</NavLink>
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
        token: state.userReducer.token,
        cart: state.cartReducer.products
    }
}

export default connect(mapStateToProps, userActions)(Links)