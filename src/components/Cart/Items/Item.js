import React from 'react'
import { connect } from 'react-redux'
import { add_to_card, delete_from_cart, set_quantity } from '../../../store/actions/cart-action'
import './Item.css'
class Item extends React.Component {
    constructor(props) {
        super(props)

    }
    state = {
        quantity: 1,
        invalidQty: ''
    }
    set_quantity = (e) => {
        e.preventDefault();
    }

    add_cart = () => {
        this.props.add_to_card(this.state.product)
    }

    delete_item = () => {
        this.props.delete_from_cart(this.state.product.id)
    }

    onChangeQuantity = (e) => {
        if(Number(e.target.value) && Number(e.target.value)> 0) {
            this.props.set_quantity(this.props.id, Number(e.target.value))
            this.setState({
                invalidQty: ''
            })
        } else {
            this.setState({
                invalidQty: 'Invalid quantity'
            })
        }


    }
    onKey = (event) => {
        return event.keyCode === 69 ? false : true
    }

    render() {
 
        const style = {
            'width' : '3rem',

        }
        return (

            <div className="card border-cart">
                <div className="card-body">
                
                    <div className="row">
                    

                        <div className="col-6 col-lg-3 col-md-3 col-sm-6">
                            <img className="img-thumbnail" src={this.props.image} alt={this.props.name} />
                        </div>
                        <div className="col-6 col-lg-9 col-md-9 col-sm-6">
                    <ul>
               
                                <li>Quantity:  <input type='number' max="10"  style={style} className="m-0 p-0 form-control" onChange={this.onChangeQuantity} defaultValue={this.props.quantity} onKeyDown={this.onKey} pattern="[0-9]*" />
                                <span>{this.state.invalidQty}</span></li>

                            <li><p>Price: {this.props.total}</p></li>
                            </ul>
                        </div>





       
                </div>
            </div>
            </div>
        )
    }
}

const mapActionToProps = {
    add_to_card,
    delete_from_cart,
    set_quantity,
}

export default connect(null, mapActionToProps)(Item)