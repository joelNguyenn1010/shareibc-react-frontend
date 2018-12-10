import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Checkout.css'
import axios from 'axios'
import { CardElement, injectStripe } from 'react-stripe-elements';

import { Elements } from 'react-stripe-elements';
import Card from './Card/Card'
import { clear_all_cart } from '../../store/actions/cart-action'
import { update_details, isValidate } from '../../store/actions/checkout-action'
import * as DETAILS from './Type'
import ShippingDetail from './ShippingDetails/ShippingDetails';
import GeneralInfo from '../Cart/GeneralInfo/GeneralInfo'
import { CircleLoader } from 'react-spinners';


class Checkout extends Component {
  constructor(props) {
    super(props)
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }
  state = {
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
      email: ''
    },
    errors: {}
  }

  isFormValid = () => {
    let isError = false;
    let errors = {
      addressError: "",
      cityError: "",
      emailError: "",
      first_nameError: "",
      last_nameError: "",
      postCodeError: ""
    };
    console.log(this.state.details.address.length < 5)
    if (this.state.details.address.length < 5) {
      isError = true;
      errors.addressError = "Username needs to be atleast 5 characters long";
    }
    this.setState({
      errors
    });
    console.log(this.state)
    console.log(isError)
    return isError;
  }

  // getToken = async (token) => {
  //   this.setState({ cardStatus: false })
  //   if (token) {
  //     var oldState = []
  //     this.props.cart.map(e => {
  //       oldState.push({ 'products': e.item.id, 'quantity': e.quantity })
  //     })
  //     this.setState({
  //       products: oldState
  //     })

  //     let details = {
  //       ...this.state.details,
  //       "total_price": 1233,
  //       "orders": oldState,
  //       "status": 1,
  //       "token": token.id
  //     }
  //     console.log(details)
  //     await axios.post("http://127.0.0.1:8000/api/order/create/", details)
  //       .then(res => {
  //         console.log(res.data)
  //         if (res.status === 200) {
  //           // this.props.clear_all_cart()
  //           console.log('[success charge]')
  //         } else {
  //           this.setState({
  //             mess: 'Something went wrong, please try again'
  //           })
  //         }
  //       })
  //       .catch(error => console.log(error.message))
  //   } else {
  //     this.setState({
  //       mess: 'Something went wrong, please try again'
  //     })
  //   }
  // }

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
      default:
        break;
    }
    this.props.update_details(details)
    this.setState({
      details: details
      //this exicute the validation
    }, () => { this.isFormValid() })
  }

  onSubmitForm(e) {
    this.setState({
      cardStatus: true
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
          "total_price": 1233,
          "orders": oldState,
          "status": 1,
          "token": token.id
        }
        console.log(details)
        axios.post("http://127.0.0.1:8000/api/order/create/", details)
          .then(res => {
            console.log(res.data)
            if (res.status === 201) {
              // this.props.clear_all_cart()
              console.log('[success charge]')
            } else {
              this.setState({
                mess: 'Something went wrong, please try again'
              })
            }
          })
          .catch(error => console.log(error.message))
          .then(() => {
            this.setState({
              cardStatus: false
            })
          })
      } else {
        console.log("ERRRORRRR FORM")
        this.setState({
          cardStatus: false
        })
      }
    });
    this.props.isValidate(this.props.details)
    e.preventDefault()

  }

  render() {
    return (
      <div className="container">
        <form className="w-100 h-100" onSubmit={this.onSubmitForm}>
          <h1>{this.state.mess}</h1>
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
                        >Place Order
          </button>
                      </div>
                    </li>
                  </ul>


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
    errors: state.checkoutReducer.errors
  }
)


export default connect(mapStateToProps, mapActionsToProps)(injectStripe(Checkout));