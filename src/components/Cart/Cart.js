import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartTable from './CartTable/CartTable'
import './Cart.css'
import EmptyCart from './EmptyCart/EmptyCart'
import GeneralInfo from './GeneralInfo/GeneralInfo'
import { clear_all_cart } from '../../store/actions/cart-action'
class Cart extends React.Component {

    renderItem = () => {

        return (
            <div>
                <h1 className="cart-header">Shopping Cart</h1>
                <div className="row">
                    <div className='col-md-7'>
                    <CartTable 
                    />
                    </div>
                    <div className="col-md-5">
                        <GeneralInfo
                            total={this.props.cart.length}
                            totalprice={this.props.totalPrice}
                        />
                    </div>
                </div>
                <div className="choices-btn m-4">
                        <NavLink to='/checkout' className="btn btn-white btn-lg" >Checkout</NavLink>
                    </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container-fluid p-5">
                {this.props.cart.length > 0 ? this.renderItem() : <EmptyCart />}
            </div>
        )
    }

}



const mapStateToProps = state => (
    {
        cart: state.cartReducer.products,
        totalPrice: state.cartReducer.totalPrice
    }
)

const mapActionToProps = {
clear_all_cart
}
export default connect(mapStateToProps, mapActionToProps)(Cart)