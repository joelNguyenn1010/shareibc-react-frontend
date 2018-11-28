import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {add_to_card, delete_from_cart, set_quantity} from '../../../store/actions/cart-action'
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
        return(
            <div className="mt-5">
                {this.state.mess}
                <h1 onClick={this.add_cart}>{this.state.product.price}</h1>
                <h1 onClick={this.delete_item}>Delete {this.state.product.id}</h1>
                <h1 onClick={this.set_quantity} >Set quanity to 5</h1>
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