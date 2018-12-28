import React from 'react'
import {MDBContainer, MDBRow} from 'mdbreact'
import {Route} from 'react-router-dom'
import MyUserMenu from '../../components/MyUserMenu/MyUserMenu'
import Order from '../../components/Order/Order'
import UserInfo from '../../components/UserInfo/UserInfo'
import {connect} from 'react-redux'
class User extends React.Component {
    render() {
        return(
            <MDBContainer fluid>
            <MDBRow>
       

            <MyUserMenu userEmail={this.props.email}/>
                <Route  path={`/user/${this.props.email}/order`} component={Order} />
                <Route path={`/user/${this.props.email}/info`} component={UserInfo} />
            </MDBRow>
      </MDBContainer>
        )
    }
}
const mapStateToProp = state => {
    return {
        email: state.userReducer.email

    }
}
export default connect(mapStateToProp)(User)