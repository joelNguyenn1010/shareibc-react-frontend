import React, { Component } from 'react'
import Home from './../Home/home'
import Navbar from '../Navbar/Navbar'
import asyncComponents from './../hoc/asyncComponents'
import { Route, Switch } from 'react-router-dom'
import Logout from '../../components/Logout/Logout'
import Details from '../../components/Product/Details/Details.js'
import Footer from '../../components/Footer/Footer'
import Container from './Container'
import Products from '../ProductsContainer/Products'
import './Main.css'
import { Elements } from 'react-stripe-elements'

const AsyncCheckout = asyncComponents(() => import('../../components/Checkout/Checkout'));

const AsyncAuthentication = asyncComponents(() => import('./../../components/Login/Login'));
const AsyncRegister = asyncComponents(() => import('./../../components/Register/Register'));
const AsyncContactUs = asyncComponents(() => import('../ContactUs/ContactUs'))
const AsyncCart = asyncComponents(() => import('../../components/Cart/Cart'))
class Main extends Component {
    render() {
        return (
            <div className="Main">

                <Navbar />

                <Switch>

                    <Route path="/" exact component={Home} />
                    <Route path="/products" exact component={Products} />
                    <Container>
                        <Route path='/login' exact component={AsyncAuthentication} />
                        <Route path='/register' exact component={AsyncRegister} />
                        <Route path='/logout' exact component={Logout} />
                        <Route path='/contact-us' component={AsyncContactUs} />
                        <Route path='/cart' exact component={AsyncCart} />
                        <Route path='/product/:id' exact component={Details} />
                        <Elements>
                            <Route path='/checkout' exact component={AsyncCheckout} />
                        </Elements>
                    </Container>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main