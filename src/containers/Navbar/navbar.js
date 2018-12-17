import React, { Component } from 'react'
import Links from './Links/Links'
import './Navbar.css'
import UserLink from './UserLink/UserLink'
class Navbar extends Component {

    render() {
        const style = window.location.pathname !== '/' ? 'navbar-blue ' : ' '
        return (
            <div className="Navbar">
                <nav className={"navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar "+style}>
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

export default Navbar