import React from 'react'
import { connect } from 'react-redux'
import Item from './Items/Item'
import { NavLink } from 'react-router-dom'
import './Cart.css'
import EmptyCart from './EmptyCart/EmptyCart'
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




    renderItem = () => {
        return (
            <div>
                <h1 className="cart-header">Shopping Cart</h1>
                <div className='row'>
                    <div className="col-6 col-lg-3 col-md-3 col-sm-5 text-center">
                        <h3>Item</h3>
                    </div>
                    <div className="col-6 col-lg-9 col-md-9 col-sm-7">
                        <h3 className="ml-5">Details</h3>
                    </div>
                </div>
                {this.items(this.props)}
                <div className="mt-5">
                <div className="choices-btn">
                    <NavLink to='/checkout' className="btn btn-white" >Checkout</NavLink>
                </div>
    
                </div>

            </div>
        )
    }

    render() {
        return (
            <div className="container-fluid">
                {this.props.cart.length > 0 ? this.renderItem() : <EmptyCart />}
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
   
}
export default connect(mapStateToProps, mapActionToProps)(Cart)