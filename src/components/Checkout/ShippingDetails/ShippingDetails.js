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
                    <span className="label">Shipping Info</span>
                </a>
                
                <div className="card-body step-content w-custom">
                <div className="form-group">
                        <MDBInput label="First Name*" required onChange={(e) => props.onChangeInput(DETAILS.FIRSTNAME, e)} />
                    </div>
                    <div className="form-group">
                        <MDBInput label="Last Name*" required onChange={(e) => props.onChangeInput(DETAILS.LASTNAME, e)} />
                    </div>
                    <div className="form-group">
                        <MDBInput className={`${props.emailValidation}`} label="Email*" type="email" required onChange={(e) => props.onChangeInput(DETAILS.EMAIL, e)} />
                        <span className="text-danger">{props.errors.email}</span>
                    </div>
              
                    <div className="form-group">
                        <MDBInput className={`${props.phone_numberValidation}`} label="Phone Number" required onChange={(e) => props.onChangeInput(DETAILS.PHONE, e)} />
                        <span className="text-danger">{props.errors.phone_number}</span>

                    </div>

                        <MDBInput label="Address" onChange={e => props.onChangeInput(DETAILS.ADDRESS, e)} />


                    <div className="form-group">
                        <MDBInput label="City" onChange={(e) => props.onChangeInput(DETAILS.CITY, e)} />
                    </div>

         
                    <div className="form-group">
                        <MDBInput type="number" label="Postcode" onChange={(e) => props.onChangeInput(DETAILS.POSTCODE, e)} />
                    </div>
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