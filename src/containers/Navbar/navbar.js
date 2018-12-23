import React, { Component } from 'react'
import Links from './Links/Links'
import './Navbar.css'
import {connect } from 'react-redux'
import * as userAction from  '../../store/actions/user-action'
import UserLink from './UserLink/UserLink'
class Navbar extends Component {
    //a function to help verify token to backend

    render() {
        return (
            <div className="Navbar">
                <nav className={"navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar "+this.props.style}>
                    <div className="container">
                        <a className="navbar-brand" href="/" >
                            <strong>Shareibc</strong>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                    <Links />
                            </ul>
                            <ul className="navbar-nav">
                                    <UserLink />
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        token: state.userReducer.token,
        headers: state.userReducer.headers,
        type: state.userReducer.loginType
    }
}
export default connect(mapStateToProps,userAction)(Navbar)