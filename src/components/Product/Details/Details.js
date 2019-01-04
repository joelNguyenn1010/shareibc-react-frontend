import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Loading from '../../Loading/Loading'
import { add_to_card, delete_from_cart, set_quantity } from '../../../store/actions/cart-action'
import CartModal from './CartModal/CartModal'
import ProductInfo from './ProductInfo/ProductInfo'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "react-image-gallery/styles/css/image-gallery.css";


import "./Details.css"
class Details extends Component {
    state = {
        product: {},
        mess: '',
        loader: true,
        modal: false,
    }

    //for mdbreact modals
  toggle =()=> {
   
    this.setState({
        modal: !this.state.modal
    }, () => {console.log(this.state)});
  }



    componentDidMount() {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product/${this.props.match.params.id}/`)
            .then(res => {

                if(res.data) {
                    console.log(res.data)

                    this.setState({
                        product: 
                        {
                            ...res.data
                        }
          
                        ,
                        loader: false
                    })
                }
           
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
    test = () => {
        return (
            <h1>Hellllloo</h1>
        )
    }

    render() {
        const style = {
            display: 'block'
        }

        return (
            <div className="container">
                <Loading loader={this.state.loader} />
                {this.state.loader === false ? <ProductInfo 
                state={this.state}
                toggle={this.toggle}
                add_cart={this.add_cart}
                /> : ""}
                <CartModal 
                toggle={this.toggle}
                modal={this.state.modal}/>
            </div >

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