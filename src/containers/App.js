import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Main from './Main/Main'
import {StripeProvider} from 'react-stripe-elements'
import ScrollToTop from './ScrollToTop/ScrollToTop'
class App extends Component {

  render() {
    return (
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_TEST}>
      <BrowserRouter>
      <ScrollToTop>
          <div className="App h-100 w-100">
            <Main />
          </div>
          </ScrollToTop>
      </BrowserRouter>
      </StripeProvider>
    );
  }
}

export default App;
