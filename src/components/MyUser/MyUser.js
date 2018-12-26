import React from 'react'
import {
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBCardBody,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
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
                  <MDBCol md="6">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
                      className="img-fluid rounded-circle z-depth-2"
                      alt="aligment"
                    />
                  </MDBCol>
                  <MDBCol md="6">Thông tin</MDBCol>
                </MDBRow>
              </MDBListGroupItem>
              {userMenus.map((item, index) => (
                <MDBListGroupItem
                key={index}
                  onClick={() => {
                    this.setState({ index });
                  }}
                  hover
                  className={this.state.index === index ? "active" : null}
                >
                  {item.name}{" "}
                </MDBListGroupItem>
              ))}
              {/* <MDBListGroupItem hover> Morbi leo risus</MDBListGroupItem>
              <MDBListGroupItem hover>Porta ac consectetur ac</MDBListGroupItem>
              <MDBListGroupItem> Vestibulum at eros</MDBListGroupItem> */}
            </MDBListGroup>
          </MDBCol>

            
    )
            }
}
export default MyUser