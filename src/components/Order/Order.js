import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { headerS } from '../../store/actions/user-action'
import './Order.css'
import * as order from './testOrder.json'
class Order extends React.Component {
    state = {
        orders: [],
        mess: ''
    }
    componentDidMount() {

        
        const data = {
            "first_name": '',
            "last_name": '',
            "userprofile": {
                "phone_number": +5141422352
            }
        }

        //THIS IS FOR TEST AND CREATE UI
        // console.log(order.default)

        //THIS IS FOR PRODUCTION
        const headers = this.props.user.headers
        // 'Content-Type': 'application/json',
        // 'Authorization': `Bearer facebook ${this.props.user.token}`
        axios.put('http://127.0.0.1:8000/api/user/update/',data, {headers})
        .then(res => console.log(res))
        .catch(error => console.log(error))

        console.log(headers)
        axios.get('http://127.0.0.1:8000/api/order/', { headers })
            .then(res => {
                if (res.data && res.data.length > 0) {
                    console.log(res.data)
                    this.setState({
                        orders: res.data
                    })
                } else {
                    this.setState({
                        orders: [],
                        mess: "We can't find any order"
                    })
                }

            })
            .catch(error => {
                // if (error.response.status === 401 || error.response.status === 403) {
                //     this.setState({
                //         orders: [],
                //         mess: "You need to login in order to do that"
                //     })
                // } else {
                //     this.setState({
                //         orders: [],
                //         mess: "Server error"
                //     })
                // }
            })
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