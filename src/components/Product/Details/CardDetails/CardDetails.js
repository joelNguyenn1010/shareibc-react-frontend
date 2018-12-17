import React from 'react'
import {Button } from 'mdbreact'
const CardDetails = (props) => {
    return (
        <div className="card mb-5">
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item font-style">Name: <span className="product-name">{props.product.name}</span> </li>
                    <li className="list-group-item font-style">Company: <span>{props.product.company}</span></li>
                    <li className="list-group-item font-style">Type: <span>{props.product.type}</span></li>
                    <li className="list-group-item font-style">
                        <div className="row">
                            <div className="col col-lg-2">Price: <span>${props.product.price}</span></div>
                            <div className="col col-lg-2">Value: <span>{props.product.value}</span></div>
                            <div className="col col-lg-2">Quantity: <span>{props.product.quantity}</span></div>
                            <div className="col col-lg-4">
      
                                <Button color="primary" onClick={() => {
                                    props.toggle(8)
                                    props.add_cart()
                                }}>Add to cart</Button>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default CardDetails