import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import * as order from './testOrder.json'
class Order extends React.Component {
    state = {
        orders: [],
        mess: ''
    }
    componentDidMount() {
        //THIS IS FOR TEST AND CREATE UI
        console.log(order.default)


        //THIS IS FOR PRODUCTION
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Authorization': `JWT ${this.props.user.token}`
        // }

        // axios.get('http://127.0.0.1:8000/api/order/', { headers })
        //     .then(res => {
        //         if(res.data && res.data.length > 0) {
        //             console.log(res.data)
        //             this.setState({
        //                 orders: res.data
        //             })
        //         } else {
        //             this.setState({
        //                 orders: [],
        //                 mess: "We can't find any order"
        //             })
        //         }
           
        //     })
        //     .catch(error => {
        //         if (error.response.status === 401 || error.response.status === 403) {
        //             this.setState({
        //                 orders: [],
        //                 mess: "You need to login in order to do that"
        //             })
        //         } else {
        //             this.setState({
        //                 orders: [],
        //                 mess: "Server error"
        //             })
        //         }
        //     })
    }

    render() {
        return (
            <div>
                <h1>Order</h1>
                <h1>{this.state.mess}</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    }
}
export default connect(mapStateToProps)(Order)