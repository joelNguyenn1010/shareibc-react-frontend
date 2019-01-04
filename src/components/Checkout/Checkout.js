import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Checkout.css'
import axios from 'axios'
import { injectStripe } from 'react-stripe-elements';
import SuccesCheckout from './SuccessCheckout/SuccesCheckout'
import Card from './Card/Card'
import { clear_all_cart } from '../../store/actions/cart-action'
import { update_details, isValidate } from '../../store/actions/checkout-action'
import * as DETAILS from './Type'
import ShippingDetail from './ShippingDetails/ShippingDetails';
import GeneralInfo from '../Cart/GeneralInfo/GeneralInfo'
import { ClipLoader } from 'react-spinners';




class Checkout extends Component {

  state = {
    auth: '',
    cardStatus: false,
    products: [],
    token: '',
    mess: '',
    details: {
      address: '',
      city: '',
      postcode: null,
      first_name: '',
      last_name: '',
      email: '',
      phone_number: null
    },
    loadingMess: '',
    errors: {},
    submitButton: "Place order",
    success: false,
    processing: false
  }


  onChangeInput = (target, e) => {
    let details = { ...this.state.details }
    switch (target) {
      case DETAILS.ADDRESS:
        details.address = e.target.value
        break;
      case DETAILS.CITY:
        details.city = e.target.value
        break;
      //need to do the validation
      case DETAILS.EMAIL:
        details.email = e.target.value
        break;
      case DETAILS.FIRSTNAME:
        details.first_name = e.target.value
        break;
      case DETAILS.LASTNAME:
        details.last_name = e.target.value
        break;
      case DETAILS.POSTCODE:
        let postcode = Number(e.target.value)
        details.postcode = postcode === 0 ? null : postcode
        break;
      case DETAILS.PHONE:
        let phone_number = Number(e.target.value)
        details.phone_number = phone_number === 0 ? null : phone_number
        break;
      default:
        break;
    }
    this.props.update_details(details)
    this.setState({
      details: details
      //this exicute the validation
    }
      // , () => { this.isFormValid() }
    )
  }

  onSubmitForm = (e) => {
    this.props.isValidate(this.props.details)
    this.setState({
      cardStatus: true,
      submitButton: "",
      processing: true
    })
    this.props.stripe.createToken({ name: this.props.details.email }).then(({ token }) => {
      if (token && !this.props.errors.isError) {
        var oldState = []
        this.props.cart.map(e => {
          oldState.push({ 'products': e.item.id, 'quantity': e.quantity })
        })
        this.setState({
          products: oldState
        })

        let details = {
          ...this.props.details,
          "total_price": this.props.totalPrice,
          "orders": oldState,
          "status": 1,
          "token": token.id
        }
        // let headers = {
        //   'Content-Type': 'application/json',
        // }
        // if (this.props.user && this.props.user.length > 0) {
        //   headers = {
        //     'Content-Type': 'application/json',
        //     'Authorization': `Bearer facebook ${this.props.user}`
        //   }
        // }
        console.log(this.props.headers)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/order/create/`, details, { headers: this.props.headers })
          .then(res => {
            console.log(res.data)
            if (res.status === 201) {
              this.props.clear_all_cart()
              this.setState({
                success: true,
                processing: false
              })
            } else {
              this.setState({
                mess: 'Something went wrong, please try again'
              })
            }
          })
          .catch(error => {
            console.log(error)
            if(error.response) {

            
            if (error.response || error.response.data.Error) {
              this.setState({
                mess: error.response.data.Error
              })
            } else {
              this.setState({
                mess: "Server error"
              })
            }

          } else {
            this.setState({
              mess: "Server error, please log out and try again"
            })
          }

          }
          )
          .then(() => {
            this.setState({
              cardStatus: false,
              submitButton: "Place order",
              processing: false
            })
          })
      } else {
        this.setState({
          cardStatus: false,
          submitButton: "Try again",
          processing: false
        })
      }
    });
    e.preventDefault()
    this.something(e)
  }
  toggle = () => {
    this.props.history.push('/')
    this.setState({
      success: !this.state.success
    })
  }
  something = (function(e) {
    var executed = false;
    return function(e) {
        if (!executed) {
            executed = true;
            e.target.className += ' was-validated';

        }
    };
})();

  render() {

    return (
      <div className="container">
        <form className="needs-validation" noValidate onSubmit={this.onSubmitForm}>
          <div className="row">
            <div className="card col-lg-8 mr-3 mt-4 mx-auto">
              <div className="row mt-1">
                <div className="col-md-12">

                  <ul className="stepper stepper-vertical">
                    <ShippingDetail
                      onChangeInput={this.onChangeInput} />
                    <li className="active">
                      <a className="m-0" href="#!">
                        <span className="circle">2</span>
                        <span className="label">Payment</span>
                      </a>

                      <div className="card-body step-content w-custom">

                        <Card
                          products={this.state.products}
                          setToken={this.getToken}
                          cardStatus={this.state.cardStatus}
                          onClickButton={this.onClickButton} />

                        <button disabled={this.state.cardStatus} className="btn btn-primary btn-sm ml-0 mt-5"
                        // onClick={() =>
                        //   {
                        //     this.submit()
                        //   }}
                        >{this.state.submitButton}
                          <ClipLoader
                            sizeUnit={"px"}
                            size={20}
                            color={'#ffffff'}
                            loading={this.state.cardStatus}
                          />
                          {this.state.loadingMess}
                        </button>
                        <span>{this.state.loadingMess}</span>
                      </div>
                    </li>
                  </ul>

                  <h1 className="text-center text-danger">{this.state.mess}</h1>

                </div>

              </div>

            </div>
            <div className="col-lg-4 mt-4">

              <GeneralInfo
                total={this.props.cart.length}
                totalprice={this.props.totalPrice}
              />
            </div>
          </div>
        </form>

        <SuccesCheckout 
        success={this.state.success} 
        toggle={this.toggle}
        />
      </div>
    );
  }
}
const mapActionsToProps = {
  clear_all_cart,
  update_details,
  isValidate
}


const mapStateToProps = state => (
  {
    cart: state.cartReducer.products,
    totalPrice: state.cartReducer.totalPrice,
    details: state.checkoutReducer.details,
    errors: state.checkoutReducer.errors,
    user: state.userReducer.token,
    headers: state.userReducer.headers
  }
)


export default connect(mapStateToProps, mapActionsToProps)(injectStripe(Checkout));