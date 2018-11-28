import React from 'react'
import * as DETAILS from './../Type'

const ShippingDetail = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <li class="completed">
                <a href="#!">
                    <span class="circle">1</span>
                    <span class="label">Shipping Address</span>
                </a>
                <div className="card-body step-content w-custom">
                    <input className="form-control" placeholder="Address" onChange={e => props.onChangeInput(DETAILS.ADDRESS, e)} />
                    <input className="form-control" placeholder="City" onChange={(e) => props.onChangeInput(DETAILS.CITY, e)} />
                    <input className="form-control" type="email" placeholder="Email" onChange={(e) => props.onChangeInput(DETAILS.EMAIL, e)} />
                    <input className="form-control" placeholder="First Name" onChange={(e) => props.onChangeInput(DETAILS.FIRSTNAME, e)} />
                    <input className="form-control" placeholder="Last Name" onChange={(e) => props.onChangeInput(DETAILS.LASTNAME, e)} />
                    <input className="form-control" type="number" placeholder="Postcode" onChange={(e) => props.onChangeInput(DETAILS.POSTCODE, e)} />

                </div>
            </li>
        </React.Fragment>
    )
}

export default ShippingDetail