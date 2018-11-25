import React, { Component } from 'react'
import Product from './../../components/Product/Product'
import Home from './../Home/home'
import Details from '../../components/Product/Details/Details'
import { Link, Route} from 'react-router-dom'
import { load_product } from '../../store/actions/products-action'
import axios from 'axios'
import Catalogies from '../../components/Catalogies/Catalogies'
import { connect } from 'react-redux'
import './Products.css'
class Products extends Component {

    state = {
        products: [{
            id: 1,
            name: 'Hotel',
            company: 'Apple',
            price: 12.99,
            value: 1000.99,
            img: 'https://pix10.agoda.net/hotelImages/489/489266/489266_17032920250052009110.jpg?s=1024x768'
        }]

    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/product/')
            .then(res => {
                this.setState({ products: res.data })
            })
            .catch(error => {
                console.log(error);
            })


    }
    onSearch = (key) => {
        axios.get(`http://127.0.0.1:8000/api/product/?p=${key}`)
            .then(res => {
                this.setState({ products: res.data })
            })
            .catch(error => {
                console.log(error);
            })
    }
    handlePay = () => {
        axios.post()
    }
    render() {
        const allProduct = this.state.products.map(product => {
            return (<Product
                key={product.id}
                name={product.name}
                company={product.company}
                price={product.price}
                value={product.value}
                img={product.image}
                id={product.id} />
            )
        })
        return (
            <React.Fragment>
                {/* Product page */}
                <div className="container">
                <Catalogies onSearch={this.onSearch} />

                    <div className="row col-container d-flex justify-content-center animated fadeIn">
                        {allProduct.length === 0 ? <h1>Can't find any products</h1> : allProduct}
                    </div>
                </div>
            </React.Fragment>

        )
    }
}
const mapStateToProps = state => (
    {
        products: state.productReducer.products
    }
)

const mapActionsToProps = {
    onLoaddingProduct: load_product,

}

export default connect(mapStateToProps, mapActionsToProps)(Products)