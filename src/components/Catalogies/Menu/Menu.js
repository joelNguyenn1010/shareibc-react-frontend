import React from 'react'
const Menu = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">Sort By</a>
            <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Price - Lowest</a>
                <a className="dropdown-item" href="#">Price - Highest</a>
                <a className="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
    )
}

export default Menu