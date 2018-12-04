import React, { Component } from 'react';
import { connect } from 'react-redux'
import './Checkout.css'
import axios from 'axios'
import { Elements } from 'react-stripe-elements';
import Card from './Card/Card'
import { clear_all_cart } from '../../store/actions/cart-action'
import * as DETAILS from './Type'
import ShippingDetail from './ShippingDetails/ShippingDetails';
import GeneralInfo from '../Cart/GeneralInfo/GeneralInfo'
class Checkout extends Component {
  constructor(props) {
    super(props)
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
    }
  }
  onClickButton() {
    // console.log('[onClick]')
    // this.setState({cardStatus: false})
  }

  isFormValid = () => {

  }




  getToken = async (token) => {
    this.setState({ cardStatus: false })
    if (token) {
      var oldState = []
      this.props.cart.map(e => {
        oldState.push({ 'products': e.item.id, 'quantity': e.quantity })
      })
      this.setState({
        products: oldState
      })

      let details = {
        ...this.state.details,
        "total_price": 1233,
        "orders": oldState,
        "status": 1,
        "token": token.id
      }
      console.log(details)
      await axios.post("http://127.0.0.1:8000/api/order/create/", details)
        .then(res => {
          if (res.status === 200) {
            this.props.clear_all_cart()
          } else {
            this.setState({
              mess: 'Something went wrong, please try again'
            })
          }
        })
        .catch(error => console.log(error))
    } else {
      this.setState({
        mess: 'Something went wrong, please try again'
      })
    }
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
      default:
        break;
    }

    this.setState({
      details
    }, () => { })
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={(e) => {
          e.preventDefault()

        }
        }>
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
                        <Elements>
                          <Card
                            products={this.state.products}
                            setToken={this.getToken}
                            cardStatus={this.state.cardStatus}
                            onClickButton={this.onClickButton} />
                        </Elements>
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
  clear_all_cart
}


const mapStateToProps = state => (
  {
    cart: state.cartReducer.products,
    totalPrice: state.cartReducer.totalPrice
  }
)


export default connect(mapStateToProps, mapActionsToProps)(Checkout);