import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { CircleLoader } from 'react-spinners';
import { css } from 'react-emotion';
import { add_to_card, delete_from_cart, set_quantity } from '../../../store/actions/cart-action'
class Details extends Component {
    state = {
        product: {},
        mess: '',
        loader: true
    }

    loading = () => {
        const style = css`
        display: block;
        margin: 0 auto 5rem auto;
        border-color: red;
    `;
        return (
            <div className="container">
                <CircleLoader
                    className={style}
                    sizeUnit={"px"}
                    size={200}
                    color={'#123abc'}
                    loading={this.state.loader}
                />
            </div>
        )
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
                        <div className="input-group input-group-sm mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text quantity px-2" id="inputGroup-sizing-sm">Quantity</span>
                            </div>
                            <input type="number" className="form-control" name="quantity" pattern="[0-9]*" inputMode="numeric" defaultValue="1" />
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

export default connect(mapStateToProps, mapActionsToProps)(Details)