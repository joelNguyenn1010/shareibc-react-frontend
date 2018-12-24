import React, { Component } from 'react'
import Product from './../../components/Product/Product'
import Pagination from '../../components/Product/Pagination/Pagination'
import { load_product, apiProducts, apiSearch } from '../../store/actions/products-action'
import axios from 'axios'
import Catalogies from '../../components/Catalogies/Catalogies'
import { connect } from 'react-redux'
import './Products.css'
import Images from '../Home/Image/Free-Background-HD.jpg'
import Loading from '../../components/Loading/Loading'
import Carousel from '../../components/Carousel/Carousel'
import NotFound404 from '../../components/NotFound404/NotFound404'
class Products extends Component {

    state = {
        products: [],
        loader: true,
        mess: ''

    }

    componentDidMount() {
        this.props.apiProducts()
        console.log(this.props.products)
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
        const images = [
            {
                image: Images
            }
        ]

        return (
            <React.Fragment>
            <Carousel 
            images={images}
            />
            <div className="container mt-5">
                <Catalogies onSearch={this.onSearch} />
                <div className="container mb-5">
                    <div className="row col-container d-flex justify-content-center animated fadeIn">
                        <Loading loader={this.props.loader} />
                        {allProduct.length === 0 ? <NotFound404 mess={this.props.error} /> : allProduct}
                    </div>
                    <div className="container mt-5">
                    <Pagination />
                    </div>
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