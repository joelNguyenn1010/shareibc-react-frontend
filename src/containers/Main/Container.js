import React, {Component} from 'react'
class Container extends Component {
    render() {
        const style = {
            'width': '100%',
            'height': '100%',
            'marginTop': '150px',
        }
        return(
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}
export default Container