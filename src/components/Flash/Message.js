
import React from 'react'
import FlashMessage from 'react-flash-message'
import './Message.css'
class Message extends React.Component {
    onClear = () => {
        this.props.clear_alert()
    }
    render() {
        return (
                <div class={"alert alert-dismissible fade show position-bottom-right "+this.props.alert} role="alert">
                    <strong><h1>{this.props.mess}</h1></strong>
                    <button type="button" className="close" onClick={() => this.onClear()} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

        )
    }
}
export default Message