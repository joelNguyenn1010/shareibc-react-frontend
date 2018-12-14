import React from 'react'
import {NavLink} from 'react-router-dom'
import './Footer.css'
const Footer = () => {
    return(
        <footer className="page-footer font-small footer-color Footer">
        
          <div className="text-center py-3">© 2018 Copyright:
            <NavLink to="/"> Shareibc</NavLink>
          </div>
        
        </footer>

    )
}

export default Footer