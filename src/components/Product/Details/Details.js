import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {add_to_card, delete_from_cart, set_quantity} from '../../../store/actions/cart-action'
import './Details.css'
class Details extends Component {
    state = {
        product: {},
        mess: ''
    }
    componentDidMount(){
        axios.get(`http://138.197.12.138/api/product/${this.props.match.params.id}/`)
        .then(res => {
            this.setState({product: res.data})
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
    render(){
        return (
            <div className="product-detail">
                <div className="container">
                {/* <div className="mt-5">
                    {this.state.mess}
                    <h1 onClick={this.add_cart}>{this.state.product.price}</h1>
                    <h1 onClick={this.delete_item}>Delete {this.state.product.id}</h1>
                    <h1 onClick={this.set_quantity} >Set quanity to 5</h1>
                </div> */}
                    <div className="product-detail-left">
                        <figure><img src={this.state.product.image} alt="cover-banner"/></figure>
                    </div>
                    <div className="product-detail-right">
                        <h1>{this.state.product.name}</h1>
                        <div className="meta">
                            <div className="item companny">
                                <span>Company: </span>
                                <a>{this.state.product.company}</a>
                            </div>
                            <div className="item type">
                                <span>Type: </span>
                                <a>{this.state.product.type}</a>
                            </div>
                        </div>
                        <div className="entry-content">
                            <p>{this.state.product.description}</p>
                        </div>
                        <div className="buy">
                        {/* Set Quantity */}
                            <div class="input-group input-group-sm mb-2">
                                <div class="input-group-prepend">
                                    <span class="input-group-text quantity px-2" id="inputGroup-sizing-sm">Quantity</span>
                                </div>
                                <input type="number" class="form-control" name="quantity" pattern="[0-9]*" inputmode="numeric" value="1"></input>
                            </div>
                        {/*  */}
                            <a className="buy-button" onClick={this.add_cart}>
                                Add to cart
                                <span>${this.state.product.price}</span>
                            </a>
                        </div>
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

export default connect(mapStateToProps,mapActionsToProps)(Details)