import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import {logout}from '../../store/actions/user-action'
import {flash_alert_warining} from '../../store/actions/alert-action'
import axios from 'axios'
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      if (this.props.auth && this.props.headers) {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/verify/`, {headers: this.props.headers})
        .then(res => { 
            if(res.status === 401 || res.status === 403) {
              this.props.logout(() => {
                this.props.flash_alert_warining("Session has expire, please login again")
              })
            }
          }
          )
        .catch(error => {
            this.props.logout(() => {
              this.props.flash_alert_warining("Session has expire, please login again")
            })
        })
      }
    }
    render() {
      return <ChildComponent {...this.props} />
    }
  }
  function mapStateToProps(state) {
    return { 
        auth: state.userReducer.token,
        headers: state.userReducer.headers,

    };
  }
  const mapActionToProps = {
    logout,
    flash_alert_warining
}

  return connect(mapStateToProps, mapActionToProps)(withRouter(ComposedComponent));
};
