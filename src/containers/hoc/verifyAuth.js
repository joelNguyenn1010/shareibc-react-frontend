import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as userAction from '../../store/actions/user-action'
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
        axios.get('http://127.0.0.1:8000/api/user/verify/', {headers: this.props.headers})
        .then(res => console.log(res))
        .catch(error => {
            this.props.logout(() => {})
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
  return connect(mapStateToProps, userAction)(withRouter(ComposedComponent));
};
