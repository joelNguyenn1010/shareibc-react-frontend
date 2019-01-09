import React from 'react'
import {NavLink} from 'react-router-dom'
import {
    MDBCol,
    MDBRow,
  
    MDBListGroup,
    MDBListGroupItem
  } from "mdbreact";

  const userMenus = [
    {
      name: "My order"
    },
    {
      name: "b"
    },
    {
      name: "c"
    }
  ];

class MyUser extends React.Component {
    state = {
        index: null
    }
    render()
{    return(
        <MDBCol size="12" md="4">
            <MDBListGroup style={{ width: "100%", marginTop: "15px" }}>
              <MDBListGroupItem>
                <MDBRow>
                  <MDBCol md="6"><h1>Hello {this.props.name}</h1></MDBCol>
                </MDBRow>
              </MDBListGroupItem>
              <NavLink activeClassName='active' className="list-group-item" to={`/user/${this.props.userEmail}/order`}> My Order</NavLink>

              <NavLink activeClassName='active' className="list-group-item" to={`/user/${this.props.userEmail}/info`}> My Account</NavLink>
        
              {/* <MDBListGroupItem hover> Morbi leo risus</MDBListGroupItem>
              <MDBListGroupItem hover>Porta ac consectetur ac</MDBListGroupItem>
              <MDBListGroupItem> Vestibulum at eros</MDBListGroupItem> */}
            </MDBListGroup>
          </MDBCol>

            
    )
            }
}
export default MyUser