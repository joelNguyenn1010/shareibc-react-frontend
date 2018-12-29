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
import requiredAuth from '../hoc/requiredAuth'
import './Main.css'
import Flash from '../../components/Flash/Flash'
import Order from '../../components/Order/Order'
import User from '../User/User'
//verify token
import verifyAuth from '../hoc/verifyAuth'
import { Elements } from 'react-stripe-elements'
import alreadyAuth from '../hoc/alreadyAuth'
const AsyncCheckout = asyncComponents(() => import('../../components/Checkout/Checkout'));
const AsyncContactUs = asyncComponents(() => import('../ContactUs/ContactUs'));
const AsyncCart = asyncComponents(() => import('../../components/Cart/Cart'));
const AsyncProjects = asyncComponents(() => import('../Projects/Projects'));
class Main extends Component {
    render() {
        const style = window.location.pathname !== '/' && window.location.pathname !== '/products' && window.location.pathname !== '/projects' ? ' navbar-blue ' : ' '
        // const style2 = window.location.pathname !== '/products' ? ' navbar-blue ' : ' '

        return (
            <div className="Main">
                <Navbar styles={style}/>
                <Flash 
                
                />
                <Switch>
                    <Route path="/" exact component={verifyAuth(Home)} />
                    <Route path="/products" exact component={verifyAuth(Products)} />
                    <Route path='/projects' exact component={verifyAuth(AsyncProjects)} />

                    <Container>
                        <Route path='/login' exact component={alreadyAuth(Login)} />
                        <Route path='/register' exact component={alreadyAuth(Register)} />
                        <Route path='/user/:email' component={requiredAuth(User)} />
                        <Route path='/projects/:id' component={verifyAuth(ProjectInfo)} />
                        <Route path='/logout' exact component={Logout} />
                        <Route path='/cart' exact component={verifyAuth(AsyncCart)} />
                        <Route path='/contact-us' component={verifyAuth(AsyncContactUs)} />

                        <Route path='/product/:id' exact component={(Details)} />
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