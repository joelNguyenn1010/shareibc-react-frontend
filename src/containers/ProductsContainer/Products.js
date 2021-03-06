import React, { Component } from 'react'
import Product from './../../components/Product/Product'
import Pagination from '../../components/Product/Pagination/Pagination'
import { load_product, apiProducts, apiSearch, apiDate } from '../../store/actions/products-action'
import axios from 'axios'
import { connect } from 'react-redux'
import './Products.css'
import Images from './Product.jpg'
import Loading from '../../components/Loading/Loading'
import Carousel from '../../components/Carousel/Carousel'
import NotFound404 from '../../components/NotFound404/NotFound404'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class Products extends Component {

    state = {
        products: [],
        loader: true,
        mess: '',
        date: 'Newest'

    }

    componentDidMount() {
        this.props.apiProducts()
    }
    onSearch = (key) => {
        this.props.apiSearch(key)
    }
    handlePay = () => {
        axios.post()
    }
    noProduct = () => {
        return(
            <React.Fragment>
                <div className="text-center">
                    <h1>No product found!!, We are looking the best deal for you.</h1>
                </div>
            </React.Fragment>
        )
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
        const ProductRender = this.props.products.length > 0 ? (
            <React.Fragment>
                <div className="row d-flex justify-content-center animated fadeIn">
                    <Loading loader={this.props.loader} />
                    {allProduct.length === 0 ? <NotFound404 mess={this.props.error} /> : allProduct}
                </div>
                <div className="container mt-5">
                    <Pagination />
                </div>
            </React.Fragment>
        ) : ''
        return (
            <React.Fragment>
                <Carousel
                    images={images}
                    pageTitles="Shop"
                />
                    <div className="d-flex justify-content-between">
                        <div className="mx-gt-768">
                            <h1 className="position__results">{this.props.products.length} results</h1>
                        </div>
                        <div className="mx-gt-768">
                            {/* <h1 className="position__results">{this.props.products.length} results</h1> */}
                            <MDBDropdown>
                                <MDBDropdownToggle caret outline color="info">
                                    {this.state.date}
                                </MDBDropdownToggle>
                                <MDBDropdownMenu basic>
                                    <MDBDropdownItem onClick={
                                        () => {
                                            this.props.apiDate('')
                                            this.setState({ date: 'Newest' })
                                        }
                                    }>Newest</MDBDropdownItem>
                                    <MDBDropdownItem onClick={
                                        () => {
                                            this.props.apiDate('date')
                                            this.setState({ date: 'Oldest' })
                                        }
                                    }>Oldest</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </div>
                    </div>

                <div className="container-fluid mt-3">
                {this.props.loader === true ? <Loading loader={this.props.loader} /> : ProductRender}
                    {/* {ProductRender} */}
                </div>

                {this.props.products.length <= 0 && this.props.loader === false ? <this.noProduct /> : ''}
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => (
    {
        products: state.productReducer.products,
        loader: state.productReducer.loader,
        error: state.productReducer.error,
    }
)

const mapActionsToProps = {
    onLoaddingProduct: load_product,
    apiProducts,
    apiSearch,
    apiDate,
}

export default connect(mapStateToProps, mapActionsToProps)(Products)