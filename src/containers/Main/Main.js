import React, {Component} from 'react'
import Home from './../Home/home'
import Navbar from  './../Navbar/navbar'
import asyncComponents from  './../hoc/asyncComponents'
import { Route, NavLink, Switch } from 'react-router-dom'
import Logout from '../../components/Logout/Logout'
import Details from '../../components/Product/Details/Details.js'
import './Main.css'

const AsyncProducts = asyncComponents(()=>import('./../ProductsContainer/Products'));
const AsyncAuthentication = asyncComponents(()=>import('./../../components/Login/Login'));
const AsyncRegister = asyncComponents(()=>import('./../../components/Register/Register'));
class Main extends Component {
    render() {
        return(
            <div className="Main">
            <Navbar />
            <Switch>
                <Route path='/product/:id' exact component={Details} />
                <Route path="/" exact component={Home} />
                <Route path="/products" exact component={AsyncProducts} />
                <Route path='/login' exact component={AsyncAuthentication} />
                <Route path='/register' exact component={AsyncRegister} />
                <Route path='/logout' exact component={Logout} />
            </Switch>
            </div>
        )
    }
}

export default Main