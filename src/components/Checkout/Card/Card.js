import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import {connect} from 'redux'
import axios from 'axios'
class Checkout extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
  }

  state = {
    mess: '',
    cardStatus: false
  }

  onClickButton(e) {
    this.setState({cardStatus: true})
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});    
    if(token) {
      this.props.setToken(token)
    }
  //   let details = {
  //     "address": "fefwvwve",
  //     "city": "qeefwwef",
  //     "postcode": 3133,
  //     "first_name": "fewawef",
  //     "last_name": "awefwef",
  //     "email": "eraecs@ve.com",
  //     "total_price": 1233,
  //     "orders": [
  //       {
  //         'products':1,
  //         'quantity':2,
        
  //       },
  //       {
  //         'products':1,
  //         'quantity':3,
        
  //       },
  //       {
  //         'products':1,
  //         'quantity':3,
        
  //       },
  //     ],
  //     "status": 1,
  //     "token": token.id
  // }

  //  if(token) {
  //   await axios.post("http://127.0.0.1:8000/api/order/create/", details)
  //   .then(res => {
  //     this.setState({
  //       mess: res.data
  //     })
  //   })
  //   .catch(error => console.log(error))
  //   .then(() => this.setState({cardStatus: false}))
  //  } else {

  //   this.setState({
  //     mess: "Please check your card details again",
  //     cardStatus: false
  //   })
  //  }

  }

  render() {
    return (
      <div className="checkout">
        <p>{this.state.mess}</p>
        <CardElement />
        <button onClick={() =>
          {
            this.submit()
          }}>Send</button>
      </div>
    );
  }
}

export default injectStripe(Checkout);