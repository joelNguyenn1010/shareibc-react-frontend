<<<<<<< Updated upstream
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
=======
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { headerS } from "../../store/actions/user-action";
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
class Order extends React.Component {
  state = {
    orders: [],
    mess: ""
  };
  componentDidMount() {
    //THIS IS FOR TEST AND CREATE UI
    // console.log(order.default)

    //THIS IS FOR PRODUCTION
    const headers = this.props.user.headers;
    // 'Content-Type': 'application/json',
    // 'Authorization': `Bearer facebook ${this.props.user.token}`
>>>>>>> Stashed changes

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
      });
  }

  render() {
    return (
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol size="12" md="4">
            <MDBListGroup style={{ width: "100%" }}>
              <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
              <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
              <MDBListGroupItem>Morbi leo risus</MDBListGroupItem>
              <MDBListGroupItem>Porta ac consectetur ac</MDBListGroupItem>
              <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
            </MDBListGroup>
          </MDBCol>
          <MDBCol size="12" md="8">
            <MDBCard>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="4">
                    <img
                      style={{
                        height: "150px"
                      }}
                      src="https://mdbootstrap.com/img/Others/documentation/1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBRow>
                      <MDBCol md="3">Name</MDBCol>
                      <MDBCol md="8">name Data</MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="3">Name</MDBCol>
                      <MDBCol md="8">name Data</MDBCol>
                    </MDBRow>{" "}
                    <MDBRow>
                      <MDBCol md="3">Name</MDBCol>
                      <MDBCol md="8">name Data</MDBCol>
                    </MDBRow>{" "}
                    <MDBRow>
                      <MDBCol md="3">Name</MDBCol>
                      <MDBCol md="8">name Data</MDBCol>
                    </MDBRow>{" "}
                    <MDBRow>
                      <MDBCol md="3">Name</MDBCol>
                      <MDBCol md="8">name Data</MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
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
