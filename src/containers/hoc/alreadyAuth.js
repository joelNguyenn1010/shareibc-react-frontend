import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

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
      console.log(this.props.auth)
      if (this.props.auth) {
        this.props.history.push('/products');
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
    return { auth: state.userReducer.token };
  }
  return connect(mapStateToProps)(withRouter(ComposedComponent));
};
