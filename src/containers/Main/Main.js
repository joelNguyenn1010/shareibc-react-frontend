import React, { Component } from 'react'
import Home from './../Home/home'
import Navbar from '../Navbar/Navbar'
import asyncComponents from './../hoc/asyncComponents'
import { Route, Switch } from 'react-router-dom'
import Logout from '../../components/Logout/Logout'
import Details from '../../components/Product/Details/Details.js'
import Container from './Container'
import './Main.css'
const AsyncCheckout = asyncComponents(() => import('../../components/Checkout/Checkout'));
const AsyncProducts = asyncComponents(() => import('./../ProductsContainer/Products'));
const AsyncAuthentication = asyncComponents(() => import('./../../components/Login/Login'));
const AsyncRegister = asyncComponents(() => import('./../../components/Register/Register'));
const AsyncCart = asyncComponents(() => import('../../components/Cart/Cart'))
class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Navbar />

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Container>
                        <Route path="/products" exact component={AsyncProducts} />
                        <Route path='/login' exact component={AsyncAuthentication} />
                        <Route path='/register' exact component={AsyncRegister} />
                        <Route path='/logout' exact component={Logout} />
                        <Route path='/cart' exact component={AsyncCart} />
                        <Route path='/product/:id' exact component={Details} />
                        <Route path='/checkout' exact component={AsyncCheckout} />
                    </Container>
                </Switch>

            </div>
        )
    }
}

export default Main