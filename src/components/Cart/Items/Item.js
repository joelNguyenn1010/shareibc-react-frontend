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
        this.props.delete_from_cart(this.props.id)
    }

    onChangeQuantity = (e) => {
        if (Number(e.target.value) && Number(e.target.value) > 0 && Number(e.target.value) <= this.props.productQty) {
            this.props.set_quantity(this.props.id, Number(e.target.value))
            this.setState({
                invalidQty: ''
            })
        } else if (Number(e.target.value) && Number(e.target.value) > this.props.productQty) {
            this.setState({
                invalidQty: `Max quantity is ${this.props.productQty}`
            })
        }
        else {
            this.setState({
                invalidQty: 'Invalid'
            })
        }


    }
    onKey = (event) => {
        return event.keyCode === 69 ? false : true
    }

    render() {

        const style = {
            'width': '3rem',

        }
        const inputStyle = {
            width: '4rem'
        }
        return (
        
            <React.Fragment>
                {/* <div className="row">
                        <div className="col-5 col-lg-3 col-md-3 col-sm-3"> */}
                <tr>
                    <td>
                        <div className="row">
                        <div className="col-lg-7 col-sm-9">
                            <img className="img-custom" src={this.props.image} alt={this.props.name} />
                        </div>
                        <div className="col-lg-5 col-sm-3">
                            <p className='equal-margin'>{this.props.name}</p>
                        </div>
                        </div>
                    </td>
                    <td>
                        <input
                            type='number'
                            max="10"
                            style={style}
                            className="form-control p-custom border"
                            onChange={this.onChangeQuantity}
                            defaultValue={this.props.quantity}
                            onKeyDown={this.onKey}
                            pattern="[0-9]*"
                            style={inputStyle} />
                        <span className="text-danger position">{this.state.invalidQty}</span>
                    </td>
                    <td>
                        <p className='equal-margin'>{this.props.total}</p>
                        <button className="btn btn-sm btn-outline-info btn-position" onClick={this.delete_item}>Remove</button>
                    </td>
                    {/* </div> */}
                    {/* <div className="col-7 col-lg-9 col-md-9 col-sm-8"> */}
                    {/* <ul>
                                <li>Quantity:
                                    <input
                                        type='number'
                                        max="10"
                                        style={style}
                                        className="m-1 p-0 form-control"
                                        onChange={this.onChangeQuantity}
                                        defaultValue={this.props.quantity}
                                        onKeyDown={this.onKey}
                                        pattern="[0-9]*" />
                                </li>
                                <span className="text-danger">{this.state.invalidQty}</span>

                                <li><p>Price: {this.props.total}</p></li>
                                <li><button className="btn btn-sm btn-outline-primary" onClick={this.delete_item}>Remove</button></li>
                            </ul> */}
                    {/* </div> */}
                    {/* </div> */}
                </tr>

          </React.Fragment>
        )
    }
}

const mapActionToProps = {
    add_to_card,
    delete_from_cart,
    set_quantity,
}

export default connect(null, mapActionToProps)(Item)