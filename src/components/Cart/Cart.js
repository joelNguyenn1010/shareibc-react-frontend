import React from 'react'
import { connect } from 'react-redux'
import Item from './Items/Item'
import { clear_all_cart } from '../../store/actions/cart-action'
import { NavLink } from 'react-router-dom'
import './Cart.css'
class Cart extends React.Component {
    constructor(props) {
        super(props)
    }
    items = (props) => props.cart.map(cart => {
        const total = Number(cart.item.price) * Number(cart.quantity)
        return (
            <Item
                key={cart.item.id}
                id={cart.item.id}
                name={cart.item.name}
                description={cart.item.description}
                quantity={cart.quantity}
                total={total}
                image={cart.item.image}
            />
        )
    })



    renderEmpty = () => {
        return (
            <React.Fragment>
                <h1>Your cart is empty</h1>
                <NavLink to='/products'>Shop Now</NavLink>
            </React.Fragment>
        )
    }


    renderItem = () => {
        return (
            <div>
                <h1 className="cart-header">Shopping Cart</h1>
                <div className=' row'>

                    <div className="col-6 col-lg-3 col-md-3 col-sm-6 text-center">
                        <h3>Item</h3>
                    </div>
                    <div className="col-6 col-lg-9 col-md-9 col-sm-6">
                        <h3 className="ml-5">Details</h3>
                    </div>
                </div>
                {this.items(this.props)}
                <p onClick={this.props.clear_all_cart} >Clear all</p>
                <NavLink to='/checkout'>Checkout</NavLink>
            </div>
        )
    }

    render() {
        return (
            <div className="container">

                {this.props.cart.length > 0 ? this.renderItem() : this.renderEmpty()}
            </div>
        )
    }

}



const mapStateToProps = state => (
    {
        cart: state.cartReducer.products
    }
)

const mapActionToProps = {
    clear_all_cart
}
export default connect(mapStateToProps, mapActionToProps)(Cart)