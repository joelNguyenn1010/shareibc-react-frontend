import React from 'react'
const NotFound404 = (props) => {
    return (
        <div className="container text-center">
            <h1>{props.mess}</h1>
            <h1>{props.status}</h1>
        </div>
    )
}

export default NotFound404