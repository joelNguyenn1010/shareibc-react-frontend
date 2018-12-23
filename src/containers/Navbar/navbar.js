import React, { Component } from 'react'
import Links from './Links/Links'
import './Navbar.css'
import { connect } from 'react-redux'
import * as userAction from '../../store/actions/user-action'
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "mdbreact";

import UserLink from './UserLink/UserLink'
class Navbars extends Component {
    //a function to help verify token to backend
    state = {
        isOpen: false
    };
    toggleCollapse = () => {
        console.log('[oncl]')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    closeCollapse = () => {
        this.setState({
            isOpen: false
        })
    }
    render() {
        return (
            // <>
                <Navbar className={"navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar " + this.props.style}>
                    <div className="container">
                        <a className="navbar-brand" href="/" >
                            <strong>Shareibc</strong>
                        </a>
                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse"  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <NavbarToggler
                            onClick={this.toggleCollapse}
                        />
                        <Collapse
                            id="navbarSupportedContent"
                            isOpen={this.state.isOpen}
                            navbar
                        >
                            <NavbarNav>
                                <ul className="navbar-nav mr-auto" 
                                onClick={() => this.closeCollapse()}
                                >
                                    <Links 
                                    />
                                </ul>
                                <ul className="navbar-nav" 
                                onClick={() => this.closeCollapse()}
                                >
                                    <UserLink 
                           />
                                </ul>
                            </NavbarNav>

                        </Collapse>

                    </div>
            
            </Navbar>
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
export default connect(mapStateToProps, userAction)(Navbars)