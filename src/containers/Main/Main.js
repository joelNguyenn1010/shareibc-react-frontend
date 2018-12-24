import React, { Component } from 'react'
import Home from './../Home/home'
import axios from 'axios'
import Navbar from '../Navbar/navbar'
import asyncComponents from './../hoc/asyncComponents'
import { Route, Switch } from 'react-router-dom'
import Logout from '../../components/Logout/Logout'
import Details from '../../components/Product/Details/Details.js'
import Footer from '../../components/Footer/Footer'
import Container from './Container'
import Products from '../ProductsContainer/Products'
import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'
import ProjectInfo from '../../components/Project/ProjectInfo/ProjectInfo'
import './Main.css'
//verify token
import verifyAuth from '../hoc/verifyAuth'
import { Elements } from 'react-stripe-elements'
import alreadyAuth from '../hoc/alreadyAuth'
const AsyncCheckout = asyncComponents(() => import('../../components/Checkout/Checkout'));
const AsyncOrder = asyncComponents(() => import('../../components/Order/Order'))
const AsyncContactUs = asyncComponents(() => import('../ContactUs/ContactUs'));
const AsyncCart = asyncComponents(() => import('../../components/Cart/Cart'));
const AsyncProjects = asyncComponents(() => import('../Projects/Projects'));
class Main extends Component {
    render() {
        const style = window.location.pathname !== '/' ? 'navbar-blue ' : ' '
        return (
            <div className="Main">
                <Navbar style={style}/>
                <Switch>
                    <Route path="/" exact component={verifyAuth(Home)} />
                    <Route path="/products" exact component={verifyAuth(Products)} />
                    <Route path='/projects/:id' component={verifyAuth(ProjectInfo)} />

                    <Container>
                        <Route path='/order' component={AsyncOrder} />
                        <Route path='/login' exact component={alreadyAuth(Login)} />
                        <Route path='/register' exact component={alreadyAuth(Register)} />
                        <Route path='/logout' exact component={Logout} />
                        <Route path='/contact-us' component={verifyAuth(AsyncContactUs)} />
                        <Route path='/cart' exact component={verifyAuth(AsyncCart)} />
                        <Route path='/product/:id' exact component={(Details)} />
                        <Route path='/projects' exact component={verifyAuth(AsyncProjects)} />

                        <Elements>
                            <Route path='/checkout' exact component={verifyAuth(AsyncCheckout)} />
                        </Elements>
                    </Container>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main