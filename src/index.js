import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import productReducer from './store/reducers/products'
import userReducer from './store/reducers/user'
import cartReducer from './store/reducers/cart'
import thunk from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
const rootReducer = combineReducers({
    productReducer,
    userReducer,
    cartReducer,
    form: formReducer,
})
var cart = {
  products: [],
  totalPrice: 0
}
// JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : []

if(JSON.parse(localStorage.getItem('cart'))){
    cart = JSON.parse(localStorage.getItem('cart'))
}

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);


const store = createStore(rootReducer, { 
  userReducer: { auth: localStorage.getItem('token')},
  cartReducer: {
    ...cart
  }
} ,enhancer)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();