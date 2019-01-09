import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Search.css'
import { apiSearch, on_loader } from '../../../store/actions/products-action'
import { Col, Fa } from "mdbreact";

class Search extends Component {
    constructor(props) {
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
                <form  className="" >
                        <div className="input-group-prepend ">
                            <input  onChange={event => this.setState({ key: event.target.value })} type="text" className="border form-control-sm p-4 w-search-input" placeholder="Searching" />
                              <span className="input-group-text black p-3 lighten-3"  >
                                <Fa className="text-white" icon="search"  onClick={this.handleSubmit}/>
                            </span>

                        </div>
                    </form>
                    {/* <div className="input-group form-sm form-1 pl-0">
                        <div className="input-group-prepend">
                            <span className="input-group-text black p-2 lighten-3"  >
                                <Fa className="text-white" icon="search" />
                            </span>
                        </div>
                        <input
                            className="border"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </div> */}

            </React.Fragment>
        )
    }
}

const mapActionToProps = {
    apiSearch,
    on_loader
}
export default connect(null, mapActionToProps)(Search)