import React, {Component} from 'react'
import './Main.css'
class Container extends Component {
    render() {
  
        return(
            <div className="container-round">
                {this.props.children}
            </div>
        )
    }
}
export default Container