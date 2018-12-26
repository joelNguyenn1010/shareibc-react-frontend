import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { headerS } from "../../store/actions/user-action";
import orderList from "./testOrder.json";
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
import "./Order.css";
import * as order from "./testOrder.json";
import MyUser from '../MyUser/MyUser'

class Order extends React.Component {
  state = {
    orders: [],
    mess: "",
    index: null
  };
  componentDidMount() {
    //THIS IS FOR TEST AND CREATE UI
    // console.log(order.default)

    //THIS IS FOR PRODUCTION
    const headers = this.props.user.headers;
    // 'Content-Type': 'application/json',
    // 'Authorization': `Bearer facebook ${this.props.user.token}`

    console.log(headers);
    axios
      .get("http://127.0.0.1:8000/api/order/", { headers })
      .then(res => {
        if (res.data && res.data.length > 0) {
          console.log(res.data);
          this.setState({
            orders: res.data
          });
        } else {
          this.setState({
            orders: [],
            mess: "We can't find any order"
          });
        }
      })
      .catch(error => {
        // if (error.response.status === 401 || error.response.status === 403) {
        //     this.props.history.push('/login');
        // } else {
        //     this.setState({
        //         orders: [],
        //         mess: "Server error"
        //     })
        // }
      });
  }

  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MyUser />
          <MDBCol size="12" md="8">
            {this.state.orders.map((item, index) => (
              <MDBCard style={{ marginTop: "15px" }} key={index}>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="4"
                    >
                      <img
                        style={{
                          height: "150px",
                          // width: '100%'
                        }}
                        src="https://mdbootstrap.com/img/Others/documentation/1.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </MDBCol>
                    <MDBCol
                    className="mt-3"
                      md="8"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around"
                      }}
                    >
                      <MDBRow>
                        <MDBCol md="3">
                          <p className="font-weight-bold text-uppercase">
                            City
                          </p>
                        </MDBCol>
                        <MDBCol md="9">
                          {item.city}
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="3">
                          <p className="font-weight-bold text-uppercase">
                            Address
                          </p>
                        </MDBCol>
                        <MDBCol md="9">{item.address}</MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="3">
                          {" "}
                          <p className="font-weight-bold text-uppercase">
                            total price
                          </p>
                        </MDBCol>
                        <MDBCol md="9">{item.total_price}</MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            ))}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.userReducer
  };
};

export default connect(mapStateToProps)(Order);
