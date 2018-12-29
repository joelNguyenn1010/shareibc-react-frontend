import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const UserLink = (props) => {
    if (props.user.token) {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle waves-effect waves-light link-up-size" id="navbarDropdownMenuLink-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i className="fa fa-user"></i> {props.user.name} </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                    <Link to={`/user/${props.user.email}/info`} className="dropdown-item waves-effect waves-light" >My Account</Link>
                    <Link to={`/user/${props.user.email}/order`} className="dropdown-item waves-effect waves-light" >My order</Link>
                    <Link to="/logout" className="dropdown-item waves-effect waves-light" >Log out</Link>

                </div>
            </li>


        )
    } else {
        return (
            <React.Fragment>
                <li className="nav-item" >
                    <NavLink to="/login" className="nav-link waves-effect waves-light link-up-size">Login</NavLink>
                </li>
                <li className="nav-item" >
                    <NavLink to="/register" className="nav-link waves-effect waves-light link-up-size">Register</NavLink>
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