import React, {Component} from 'react';
import {
  CardElement, 
  injectStripe, 
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from 'react-stripe-elements';
import {connect} from 'redux'
import axios from 'axios'
class Checkout extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  state = {
    mess: '',
  }


  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});    
    if(token) {
      this.props.setToken(token)
    }
  }

  render() {
    return (
      <div className="checkout">
        <p>{this.state.mess}</p>
        <label>Credit Card</label>
        <CardElement style={{base: {fontSize: '18px'}}}/>
        {/* <CardNumberElement onReady={(el) => el.focus()}/>
        <CardExpiryElement />
        <CardCVCElement /> */}
        {/* <button disabled={this.props.cardStatus} className="btn btn-primary btn-sm ml-0 mt-5" 
        // onClick={() =>
        //   {
        //     this.submit()
        //   }}
          >Place Order</button> */}






      </div>
    );
  }
}

export default Checkout;