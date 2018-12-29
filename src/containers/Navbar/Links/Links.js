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
                    <NavLink to="/" exact activeClassName="active" className="nav-link waves-effect waves-light link-up-size">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/products" exact className="nav-link waves-effect waves-light link-up-size">Shop</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link waves-effect waves-light link-up-size" to="/contact-us">Contact</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to="/projects" exact className="nav-link waves-effect waves-light link-up-size">Projects</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to="/cart" exact className="nav-link waves-effect waves-light link-up-size"><i className="fas fa-shopping-cart"></i> {this.props.cart.length} Items</NavLink>
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