import React from 'react'
import { NavLink } from 'react-router-dom'

const FooterLink = () =>{
    return(
        <div class="row text-center">
          <div className="col-lg-4 ">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">About us</h5>

            <ul class="list-unstyled ">
              <li className="mb-2">
                <NavLink to="/products">Shop</NavLink>
              </li>
              {/* <li>
                <NavLink to=''>Project</NavLink>
              </li> */}
              <li>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>

            </ul>
          </div>

          <div className="col-lg-4">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Follow Us</h5>

            <ul class="list-unstyled">
              <li className="mb-2">
                <a href="https://www.facebook.com/joel.nguyenanh" target="_blank">Facebook</a>
              </li>
              <li>
                <a href="https://www.facebook.com/joel.nguyenanh" target="_blank">Instagram</a>
              </li>

            </ul>
          </div >

          <div className="col-lg-4">
            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Get the app</h5>

            <ul class="list-unstyled">
              <li className="mb-2">
                <a href="#!">Android (Coming Soon)</a>
              </li>
              <li>
                <a href="#!">App Store (Coming Soon)</a>
              </li>

            </ul>
          </div>

        </div>
    )
}

export default FooterLink