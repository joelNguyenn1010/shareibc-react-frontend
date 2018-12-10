import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Loading from '../../Loading/Loading'
import { add_to_card, delete_from_cart, set_quantity } from '../../../store/actions/cart-action'
import "./Details.css"
class Details extends Component {
    state = {
        product: {},
        mess: '',
        loader: true
    }

    componentDidMount() {
        axios.get(`http://138.197.12.138/api/product/${this.props.match.params.id}/`)
            .then(res => {
                this.setState({
                    product: res.data,
                    loader: false
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    set_quantity = () => {
        this.props.set_quantity(this.props.match.params.id, 2)
    }
    add_cart = () => {
        this.props.add_to_card(this.state.product)
    }

    delete_item = () => {
        this.props.delete_from_cart(this.state.product.id)
    }
    render() {
        return (
            // <div className="mt-5">
            //     {this.state.mess}
            //     <h1 onClick={this.add_cart}>{this.state.product.price}</h1>
            //     <h1 onClick={this.delete_item}>Delete {this.state.product.id}</h1>
            //     <h1 onClick={this.set_quantity} >Set quanity to 5</h1>
            //     {this.loading()}
            // </div>
            <div className="product-detail">
              {/* <div className="row">
                <div className="col col-lg-8 box">
                    <img width="100%" src="http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel.jpeg"></img>
                </div>
                <div className="col col-lg-4 box">
                    <img width="100%" src="http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel.jpeg"></img>
                    <img width="100%" src="http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel.jpeg"></img>
                </div>
                <div className="col col-lg-4 box">
                    <img width="100%" src="http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel.jpeg"></img>
                </div>
                <div className="col col-lg-4 box">
                    <img width="100%" src="http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel.jpeg"></img>
                </div>
                <div className="col col-lg-4 box">
                    <img width="100%" src="http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel.jpeg"></img>
                </div>
                <div className="col col-lg-4 offset-lg-8"> 
                    <button className="photo-button">See all photos</button>
                </div>
              </div> */}

                <div class="d-flex flex-row mb-4 mx-auto">
                    <div class="d-flex flex-column flex-main-item mr-3">
                        <img width="100%" src="http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel.jpeg"></img>
                    </div>
                    <div class="d-flex flex-column flex-item ml-3">
                        <img className="mb-2" width="100%" src="http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel.jpeg"></img>
                        <img className="mt-2" width="100%" src="http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel.jpeg"></img>
                    </div>
                </div>  
                <div class="d-flex flex-row mx-auto mb-3">
                    <div class="d-flex flex-row flex-main-item mr-3">
                        <img class="mr-3" width="100%" src="http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel.jpeg"></img>
                        <img class="ml-3" width="100%" src="http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel.jpeg"></img>
                    </div>
                    <div class="d-flex flex-column bd-highlight flex-item ml-3">
                        <img width="100%" src="http://138.197.12.138/media/products/UTS_Technology_fewfd-hotel.jpeg"></img>
                    </div>
                </div>
                <div class="d-flex flex-row-reverse mb-4">
                    <button className="photo-button flex-item">See all photos</button>
                </div>
                <div className="card mb-5">
                    <div className="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item font-style">Name: <span className="product-name">{this.state.product.name}</span> </li>
                            <li class="list-group-item font-style">Company: <span>{this.state.product.company}</span></li>
                            <li class="list-group-item font-style">Type: <span>{this.state.product.type}</span></li>
                            <li class="list-group-item font-style">
                                <div className="row">
                                    <div className="col col-lg-2">Price: <span>${this.state.product.price}</span></div>
                                    <div className="col col-lg-2">Value: <span>{this.state.product.value}</span></div>
                                    <div className="col col-lg-4">
                                    {/* Set Quantity */}
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span className="px-2">Quantity</span>
                                            </div>
                                        </div>
                                    {/*  */}
                                    </div>
                                    <div className="col col-lg-4">
                                        <button className="btn btn-primary">Add to cart</button>
                                        <button className="btn btn-primary">Some text here</button>    
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item font-style">
                                Share this deal: 
                                <a href=""> <i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-menu">
                    <nav class="nav nav-pills nav-tabs nav-fill">
                        <a className="nav-item nav-link color-style active" href="#">About the deal</a>
                        <a className="nav-item nav-link" href="#">How to use</a>
                        <a className="nav-item nav-link" href="#">Reviews</a>
                    </nav>
                    <div className="content">
                        <h6>Tab content</h6>
                    </div>
                </div>  
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        product: state.cartReducer.products
    }
)

const mapActionsToProps = {
    add_to_card,
    delete_from_cart,
    set_quantity,
}

export default connect(mapStateToProps, mapActionsToProps)(Details)