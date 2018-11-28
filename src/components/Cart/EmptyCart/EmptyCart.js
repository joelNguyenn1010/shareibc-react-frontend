import React from 'react'
import { NavLink} from 'react-router-dom'
const EmptyCart = (props) => {
    return (
        <div className="container mx-auto text-center">
            <h1>Your cart is empty</h1>
            <NavLink className="btn btn-white" to='/products'>Shop Now</NavLink>
        </div>
    )
}

export default EmptyCart