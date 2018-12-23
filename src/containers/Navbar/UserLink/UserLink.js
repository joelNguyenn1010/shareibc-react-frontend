import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const UserLink = (props) => {
    if (props.user.token) {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i className="fa fa-user"></i> {props.user.name} </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                    <a className="dropdown-item waves-effect waves-light" href="#">My account</a>
                    <NavLink to="/order" className="dropdown-item waves-effect waves-light" >My order</NavLink>
                    <NavLink to="/logout" className="dropdown-item waves-effect waves-light" >Log out</NavLink>

                </div>
            </li>


        )
    } else {
        return (
            <React.Fragment>
            <li className="nav-item" >
                <NavLink to="/login" exact className="nav-link waves-effect waves-light">Login</NavLink>
            </li>
            <li className="nav-item" >
                <NavLink to="/register" exact className="nav-link waves-effect waves-light">Register</NavLink>
            </li>
            </React.Fragment>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
    }
}

export default connect(mapStateToProps)(UserLink)