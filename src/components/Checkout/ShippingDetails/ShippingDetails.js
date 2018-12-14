import React from 'react'
import * as DETAILS from './../Type'
import {connect} from 'react-redux'
import TextField from '@material-ui/core/TextField';

const ShippingDetail = (props) => {
    return (
        <React.Fragment>
            <li className="completed">
                <a href="#!">
                    <span className="circle">1</span>
                    <span className="label">Shipping Address</span>
                </a>
                <div className="card-body step-content w-custom">
                    <span className="text-danger">{props.errors.address}</span>
                    <TextField className="w-100 mb-3" error={props.errors.addressValidation} placeholder="Address" onChange={e => props.onChangeInput(DETAILS.ADDRESS, e)} />
                    
                    <span className="text-danger">{props.errors.city}</span>
                    <TextField className="w-100 mb-3" error={props.errors.cityValidation} placeholder="City" onChange={(e) => props.onChangeInput(DETAILS.CITY, e)} />
                    
                    <span className="text-danger">{props.errors.email}</span>
                    <TextField className="w-100 mb-3" error={props.errors.emailValidation} placeholder="Email*" onChange={(e) => props.onChangeInput(DETAILS.EMAIL, e)} />
                    
                    <span className="text-danger">{props.errors.first_name}</span>
                    <TextField className="w-100 mb-3" error={props.errors.first_nameValidation} placeholder="First Name*" onChange={(e) => props.onChangeInput(DETAILS.FIRSTNAME, e)} />
                    
                    <span className="text-danger">{props.errors.last_name}</span>
                    <TextField className="w-100 mb-3" error={props.errors.last_nameValidation} placeholder="Last Name*" onChange={(e) => props.onChangeInput(DETAILS.LASTNAME, e)} />
                    
                    <span className="text-danger">{props.errors.phone_number}</span>
                    <TextField className="w-100 mb-3" error={props.errors.phone_numberValidation} placeholder="Phone Number*" onChange={(e) => props.onChangeInput(DETAILS.PHONE, e)} />
                    

                    <span className="text-danger">{props.errors.postcode}</span>
                    <TextField className="w-100 mb-3" error={props.errors.postcodeValidation} type="number" placeholder="Postcode" onChange={(e) => props.onChangeInput(DETAILS.POSTCODE, e)} />
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