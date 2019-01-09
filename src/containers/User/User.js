import React from 'react'
import {MDBContainer, MDBRow} from 'mdbreact'
import {Route} from 'react-router-dom'
import MyUserMenu from '../../components/MyUserMenu/MyUserMenu'
import Order from '../../components/Order/Order'
import MyAaccount from '../../components/MyAccount/MyAccount'
import {connect} from 'react-redux'
class User extends React.Component {
    render() {
        return(
            <MDBContainer fluid >
            <MDBRow>
       

            <MyUserMenu userEmail={this.props.email} name={this.props.name}/>
                <Route  path={`/user/${this.props.email}/order`} component={Order} />
                <Route path={`/user/${this.props.email}/info`} component={MyAaccount} />
            </MDBRow>
      </MDBContainer>
        )
    }
}
const mapStateToProp = state => {
    return {
        email: state.userReducer.email,
        name: state.userReducer.name

    }
}
export default connect(mapStateToProp)(User)