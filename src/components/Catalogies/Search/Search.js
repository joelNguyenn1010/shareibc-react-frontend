import React, { Component } from 'react'
class Search extends Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        key: ''
    }

    handleSubmit(event) {
        this.props.onSearch(this.state.key)
        event.preventDefault();
    }
    render() {
        console.log(this.state.key)
        return (
            
            <React.Fragment>
                    <form onSubmit={this.handleSubmit} className="search-form" >
                        <div className="form-group md-form my-0 waves-light waves-effect waves-light">
                            <input onChange={event => this.setState({ key: event.target.value })} type="text" className="form-control" placeholder="Searching" />
                        </div>
                    </form>


            </React.Fragment>
        )
    }
}
export default Search