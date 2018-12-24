import React from 'react'
import './NotFound404.css'
const NotFound404 = (props) => {
    return (
        <div className="container text-center m-error-custom">
            <h1>{props.mess}</h1>
            <h1>{props.status}</h1>
        </div>
    )
}

export default NotFound404