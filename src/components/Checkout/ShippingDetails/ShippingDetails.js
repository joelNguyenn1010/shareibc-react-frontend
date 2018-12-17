import React from 'react'
import * as DETAILS from './../Type'
import { connect } from 'react-redux'
import { MDBInput } from "mdbreact";

const ShippingDetail = (props) => {
    return (
        <React.Fragment>
            <li className="completed">
                <a href="#!">
                    <span className="circle">1</span>
                    <span className="label">Shipping Address</span>
                </a>
                <div className="card-body step-content w-custom">
                    <div className="invalid-feedback">{props.errors.address}</div>
                    <MDBInput className="mb-3" label="Address" onChange={e => props.onChangeInput(DETAILS.ADDRESS, e)} />

                    <div className="invalid-feedback">{props.errors.city}</div>
                    <MDBInput className="mb-3" label="City" onChange={(e) => props.onChangeInput(DETAILS.CITY, e)} />

                    <div className="invalid-feedback">{props.errors.email}</div>
                    <MDBInput className="mb-3" label="Email*" type="email" required onChange={(e) => props.onChangeInput(DETAILS.EMAIL, e)} />
                    <div className="form-group">
                        <MDBInput className="mb-3" label="First Name*" required onChange={(e) => props.onChangeInput(DETAILS.FIRSTNAME, e)} />
                        <div className="invalid-feedback">{props.errors.first_name}fawefawefwef</div>
                    </div>
                    <div className="invalid-feedback">{props.errors.last_name}</div>
                    <MDBInput className="mb-3" label="Last Name*" required onChange={(e) => props.onChangeInput(DETAILS.LASTNAME, e)} />

                    <div className="invalid-feedback">{props.errors.phone_number}</div>
                    <MDBInput className="mb-3" label="Phone Number*" required onChange={(e) => props.onChangeInput(DETAILS.PHONE, e)} />


                    <div className="invalid-feedback">{props.errors.postcode}</div>
                    <MDBInput className="mb-3" type="number" label="Postcode" onChange={(e) => props.onChangeInput(DETAILS.POSTCODE, e)} />
                </div>
            </li>
        </React.Fragment>
    )
}

const mapStateToProps = state => (
    {
        cart: state.cartReducer.products,
        totalPrice: state.cartReducer.totalPrice,
        details: state.checkoutReducer.details,
        errors: state.checkoutReducer.errors
    }
)

export default connect(mapStateToProps)(ShippingDetail)