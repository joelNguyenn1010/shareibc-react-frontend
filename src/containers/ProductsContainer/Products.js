import React, { Component } from 'react'
import Product from './../../components/Product/Product'
import Home from './../Home/home'
import Details from '../../components/Product/Details/Details'
import { Link, Route } from 'react-router-dom'
import { load_product, apiProducts, apiSearch } from '../../store/actions/products-action'
import axios from 'axios'
import Catalogies from '../../components/Catalogies/Catalogies'
import { connect } from 'react-redux'
import './Products.css'
import Loading from '../../components/Loading/Loading'
import Carousel from '../../components/Carousel/Carousel'
import NotFoundProduct from '../../components/NotFoundProduct/NotFoundProduct'
class Products extends Component {

    state = {
        products: [],
        loader: true,
        mess: ''

    }

    componentDidMount() {
        this.props.apiProducts()
        console.log('babae')
        console.log(this.props.products)
        // axios.get('http://138.197.12.138/api/product/')
        //     .then(res => {
        //         if (res.data && res.data.length > 0) {
        //             this.setState({
        //                 products: res.data,
        //                 loader: false
        //             })
        //         }

        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    }
    onSearch = (key) => {
        this.props.apiSearch(key)
    }
    handlePay = () => {
        axios.post()
    }

    render() {
        const allProduct = this.props.products.map(product => {
            return (<Product
                key={product.id}
                name={product.name}
                company={product.company}
                price={product.price}
                value={product.value}
                img={product.front_images}
                id={product.id} />
            )
        })
        console.log(['all'])
        console.log(allProduct)
        return (
            <React.Fragment>
                {/* Product page */}
                <Carousel />
                <Catalogies onSearch={this.onSearch} />

                <div className="container mb-5">
                    <div className="row col-container d-flex justify-content-center animated fadeIn">
                        <Loading loader={this.props.loader} />
                        {allProduct.length === 0 ? <NotFoundProduct mess={this.props.error} /> : allProduct}
                        {allProduct.length === 0 ? <NotFoundProduct mess={this.state.mess} /> : allProduct}

                        {allProduct.length === 0 ? <NotFoundProduct mess={this.state.mess} /> : allProduct}

                        {allProduct.length === 0 ? <NotFoundProduct mess={this.state.mess} /> : allProduct}

                        {allProduct.length === 0 ? <NotFoundProduct mess={this.state.mess} /> : allProduct}

                        {allProduct.length === 0 ? <NotFoundProduct mess={this.state.mess} /> : allProduct}

                        {allProduct.length === 0 ? <NotFoundProduct mess={this.state.mess} /> : allProduct}

                        {allProduct.length === 0 ? <NotFoundProduct mess={this.state.mess} /> : allProduct}

                        {allProduct.length === 0 ? <NotFoundProduct mess={this.state.mess} /> : allProduct}

                    </div>
                </div>
            </React.Fragment>

        )
    }
}
const mapStateToProps = state => (
    {
        products: state.productReducer.products,
        loader: state.productReducer.loader,
        error: state.productReducer.error
    }
)

const mapActionsToProps = {
    onLoaddingProduct: load_product,
    apiProducts,
    apiSearch
}

export default connect(mapStateToProps, mapActionsToProps)(Products)