import React, { Component } from 'react'
import { connect } from 'react-redux'
import { apiSearch,on_loader } from '../../../store/actions/products-action'
class Search extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        key: ''
    }

    handleSubmit(event) {
        // this.props.on_loader()
        // this.props.apiSearch(this.state.key)
        this.props.onSearch(this.state.key)
        event.preventDefault();
    }
    render() {
        return (
            
            <React.Fragment>
                    <form onSubmit={this.handleSubmit} className="search-form" >
                        <div className="form-group md-form my-0 waves-light waves-effect waves-light">
                            <input onChange={event => this.setState({ key:this.props.onSearch(event.target.value) })} type="text" className="form-control" placeholder="Searching" />
                        </div>
                    </form>


            </React.Fragment>
        )
    }
}

const mapActionToProps = {
    apiSearch,
    on_loader
}
export default connect(null, mapActionToProps)(Search)