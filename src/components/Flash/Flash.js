import React from 'react'
import { connect } from 'react-redux'
import { clear_alert } from '../../store/actions/alert-action'
import Message from './Message'
class Flash extends React.Component {
    componentDidCatch() {
        console.log('didcat')
    }
    componentDidMount() {
        console.log('didmout')

        // setTimeout(function(){
        //     // After waiting for five seconds, submit the form.
        //     this.props.clear_alert();
        // }.bind(this), 5000);

    }
    componentDidUpdate() {
        if (this.props.mess.length > 0 && this.props.mess) {
            setTimeout(function () {
                // After waiting for five seconds, submit the form.
                this.props.clear_alert();
            }.bind(this), 5000);
        }

    }
    componentWillMount() {
        console.log('willmou')
        //
    }
    componentWillReceiveProps() {
        console.log('willrece')

    }
    componentWillUnmount() {
        console.log('willunmou')

    }
    componentWillUpdate() {
        console.log('willupdate')
    }


    render() {
        if (this.props.mess && this.props.mess.length > 0) {
            return (
                <React.Fragment>

                    <Message
                        mess={this.props.mess}
                        alert={this.props.alert}
                        clear_alert={this.props.clear_alert}
                    />
                </React.Fragment>
            )
        }
        return (
            <React.Fragment></React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        mess: state.alertReducer.mess,
        alert: state.alertReducer.alert
    }
}
const mapActionToProps = {
    clear_alert
}
export default connect(mapStateToProps, mapActionToProps)(Flash)