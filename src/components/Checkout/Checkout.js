import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import { Elements } from 'react-stripe-elements';
import Card from './Card/Card'
import { clear_all_cart } from '../../store/actions/cart-action'
import * as DETAILS from './Type'
class Checkout extends Component {
  constructor(props) {
    super(props)
  }
  state = {
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

  getToken = async (token) => {
    console.log(this.state.details)
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
      console.log(this.state.details)
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
        details.postcode = Number(e.target.value)
        break;
      default:
        break;
    }
    this.setState({ details })
  }

  render() {

    return (
      <div className="container">
        <h1>{this.state.mess}</h1>
        <div className="row">

          <div className="card col-lg-8 mr-3 mt-4 mx-auto">
            <div className='card-body'>
              <form onSubmit={(e) => e.preventDefault()}>
                <input className="form-control" placeholder="Address" onChange={e => this.onChangeInput(DETAILS.ADDRESS, e)} required />
                <input className="form-control" placeholder="City" onChange={(e) => this.onChangeInput(DETAILS.CITY, e)} required />
                <input className="form-control" type="email" placeholder="Email" onChange={(e) => this.onChangeInput(DETAILS.EMAIL, e)} required />
                <input className="form-control" placeholder="First Name" onChange={(e) => this.onChangeInput(DETAILS.FIRSTNAME, e)} required />
                <input className="form-control" placeholder="Last Name" onChange={(e) => this.onChangeInput(DETAILS.LASTNAME, e)} required />
                <input className="form-control" type="number" placeholder="Postcode" onChange={(e) => this.onChangeInput(DETAILS.POSTCODE, e)} required />
                <Elements>
                  <Card
                    products={this.state.products}
                    setToken={this.getToken} />
                </Elements>
              </form>
            </div>
          </div>
          <div className="card col-lg-3 mt-4">

          </div>
        </div>
      </div>
    );
  }
}
const mapActionsToProps = {
  clear_all_cart
}


const mapStateToProps = state => (
  {
    cart: state.cartReducer.products
  }
)


export default connect(mapStateToProps, mapActionsToProps)(Checkout);