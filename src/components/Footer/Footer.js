import React from 'react'
import {NavLink} from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return(
        <footer className="page-footer font-small primary-color Footer">
        
          <div className="footer-copyright text-center py-3">© 2018 Copyright:
            <NavLink to="/"> Shareibc</NavLink>
          </div>
        
        </footer>

    )
}

export default Footer