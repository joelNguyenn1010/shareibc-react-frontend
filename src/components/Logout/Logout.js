import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as userAction from '../../store/actions/user-action'
class Logout extends Component {
    constructor(props) {
        super(props)
        this.props.logout(()=>{
            this.props.history.push('/');
        })
    }
    render() {
        return(
            <h1>You have been logout </h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.userReducer.auth
    }
}
export default connect(mapStateToProps, userAction)(Logout)