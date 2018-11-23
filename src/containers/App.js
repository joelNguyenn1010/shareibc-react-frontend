import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Main from './Main/Main'
import {StripeProvider} from 'react-stripe-elements'
class App extends Component {

  render() {
    return (
      <StripeProvider apiKey="pk_test_MlIt57HmUqLZZRaQwZRCSg1l">
      <BrowserRouter>

          <div className="App h-100 w-100">
            <Main />
          </div>
      

  

      </BrowserRouter>
      </StripeProvider>
    );
  }
}

export default App;
