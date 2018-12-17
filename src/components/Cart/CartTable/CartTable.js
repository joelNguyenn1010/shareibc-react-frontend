import React from 'react'
import {connect} from 'react-redux'
import Item from '../Items/Item'
const items = (props) => props.cart.map(cart => {
    let total = Number(cart.item.price) * Number(cart.quantity)
    return (
        <Item
            key={cart.item.id}
            id={cart.item.id}
            name={cart.item.name}
            description={cart.item.description}
            quantity={cart.quantity}
            productQty={cart.item.quantity}
            total={total}
            image={cart.item.front_images}
        />
    )
})



const CartTable = (props) => {
    return(
        <div className="table-responsive">
        <table className="table table-condensed border">
            <thead className="card-header">
                <tr>
                    <th>Item</th>
                    <th></th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>

            {items(props)}

        </table>
    </div>
    )
}

const mapStateToProps = state => (
    {
        cart: state.cartReducer.products,
        totalPrice: state.cartReducer.totalPrice
    }
)

export default connect(mapStateToProps)(CartTable)