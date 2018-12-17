import React from 'react'
import { connect } from 'react-redux'
import Item from './Items/Item'
import { NavLink } from 'react-router-dom'
import CartTable from './CartTable/CartTable'
import './Cart.css'
import EmptyCart from './EmptyCart/EmptyCart'
import GeneralInfo from './GeneralInfo/GeneralInfo'
import { clear_all_cart } from '../../store/actions/cart-action'
class Cart extends React.Component {
    constructor(props) {
        super(props)
    }






    renderItem = () => {

        return (
            <div>
                <h1 className="cart-header">Shopping Cart</h1>
                <div className="row">
                    <div className='col-md-7'>
                    <CartTable 
                    />
                        {/* <div className="table-responsive">
                            <table className="table table-condensed border">
                                <thead className="card-header">
                                    <tr>
                                        <th>Item</th>
                                        <th></th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>

                                {this.items(this.props)}

                            </table>
                        </div> */}
                    </div>
                    <div className="col-md-5">
                        <GeneralInfo
                            total={this.props.cart.length}
                            totalprice={this.props.totalPrice}
                        />
                    </div>
                </div>
                <div className="choices-btn m-4">
                        <button className="btn btn-outline-primary" onClick={this.props.clear_all_cart} >Clear all</button>
                        <NavLink to='/checkout' className="btn btn-white" >Checkout</NavLink>
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
        cart: state.cartReducer.products,
        totalPrice: state.cartReducer.totalPrice
    }
)

const mapActionToProps = {
clear_all_cart
}
export default connect(mapStateToProps, mapActionToProps)(Cart)